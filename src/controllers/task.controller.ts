import { Request, Response } from 'express';
import { taskModel } from '../config/schema';

const getAllTask = async (req: Request, res: Response) => {
    try {
        const task = await taskModel.find({ isDeleted: { $exists: false } })
     
        return res.status(200).json({
          success: true,
          message: "Success to Get All Task",
          data: task
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
          success: false,
          message: "Error to Get All Task"
        });
    }
}

const getOneTask = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const task = await taskModel.findById(id);
      if(!task) {
        return res.status(404).json({
          message: "Task not found"
        })
      }
        
      return res.status(200).json({
        success: true,
        message: "Success to Get Task",
        data: task,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "Internal server error while get Task or Task id wrong format"
      });
    }
  };

const createTask = async (req: Request, res: Response) => {
    try {
        const { task }= req.body

        const newTask = await taskModel.create({ task })
        return res.status(200).json({
            success: true,
            message: "Task registration success",
            data: newTask
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error})
    }
}

const updateTask = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      console.log(req.body)

        const updatedStatus = await taskModel.updateOne({ _id: id }, { status: status });
  
        if (updatedStatus.modifiedCount > 0) {
          return res.status(200).json({
            success: true,
            message: 'Successfully update status',
            data: {
              status: status
            }
          });
        } else {
          return res.status(404).json({
            success: false,
            message: 'No update status were found'
          });
        }
    } catch (err) {
      console.log('Error updating status:', err);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while updating the status'
      });
    }
  };

const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedTask = await taskModel.findByIdAndUpdate(id,{ $set: { isDeleted: true }}, { new: true });
      
        if (deletedTask) {
            return res.status(200).json({
                success: true,
                message: 'Successfully Delete Task',
                data: deletedTask
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
    } catch (err) {
        console.log('Error soft deleting transfer:', err);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while deleting transfer data'
        });
    }
};


export { getOneTask, getAllTask, createTask, updateTask, deleteTask }
