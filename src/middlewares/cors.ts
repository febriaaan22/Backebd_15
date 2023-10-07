const clientAccess = {
    limitedClient : {
        // origin: ['https://week15-rpb-x.netlify.app', 'https://week15-rpb-x.netlify.app/*','https://week15-rpb-y.netlify.app', 'https://week15-rpb-y.netlify.app/*'],
        origin: ['http://localhost:5173', 'http://localhost:5173/*', 'http://localhost:5174', 'http://localhost:5174/*'],
        methods: ['GET', 'POST']
    },
    globalClient : {
        origin: ['http://localhost:5174', 'http://localhost:5174/*'],
        methods: ['PATCH', 'DELETE']
    }
}

export default clientAccess