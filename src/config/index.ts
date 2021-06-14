interface mongoURI {
    URI: string
}

export const getMongoUrl = () : mongoURI => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return { URI: "mongodb+srv://TodoApp:11023759@todoapp.u1ny9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" };
        case 'production':
            return { URI: "mongodb+srv://TodoApp:11023759@todoapp.u1ny9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" };
        case 'test':
            return { URI: "mongodb+srv://TodoApp:11023759@todoapp.u1ny9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" };
        default:
            return { URI: "mongodb+srv://TodoApp:11023759@todoapp.u1ny9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" };
    };
};