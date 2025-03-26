import Customer from "../../assets/customer.png";
import Stock from "../../assets/stock.png";
import Movie from "../../assets/movie.png";
import Compiler from "../../assets/compiler.png";
import Chat from "../../assets/chat.png";
import Blog from "../../assets/blog.png";
import Options from "../../assets/options.png";


export const projectsData = [
    {
        id: 1,
        image: Customer,
        title: "Customer Churn Prediction",
        content: "Built a machine learning model to predict customer churn using Logistic Regression, Decision Trees, Random Forest, SVM, and Neural Networks. Achieved 84% accuracy with optimized feature engineering and model evaluation.",
        category: "Machine Learning",
        link: "https://github.com/Lightning-01/Customer-Churn-Prediction",
    },
    {
        id: 2,
        image: Stock,
        title: "LSTM Stock Predictor",
        content: "Developed an LSTM-based stock predictor to analyze Microsoft (MSFT) stock trends using time-series forecasting. The model was trained on historical closing prices and optimized for short-term predictions.",
        category: "Machine Learning",
        link: "https://github.com/Lightning-01/LSTM-Model",
    },
    {
        id: 3,
        image: Movie,
        title: "Movie Recommendation System",
        content: "Built a Collaborative Filtering-based movie recommendation system using matrix factorization and similarity-based techniques. Processed the MovieLens 20M dataset to create a scalable User-Item interaction matrix for personalized recommendations, optimizing predictions with RMSE and MAPE metrics.",
        category: "Machine Learning",
        link: "https://github.com/Lightning-01/Movie-Recommendation-System",
    },
    {
        id: 4,
        image: Compiler,
        title: "Compiler",
        content: "Developed a C-based compiler using x86 assembly, capable of parsing and translating high-level code into assembly instructions. Supports arithmetic operations, loops, conditionals, and successfully compiles FizzBuzz. Implemented a Lexer, Parser, and Code Generator from scratch.",
        category: "Other",
        link: "https://github.com/Lightning-01/Compiler",
    },
    {
        id: 5,
        image: Chat,
        title: "Web Chat",
        content: "Developed a real-time chat application using React.js, Node.js, and Socket.io, enabling instant communication between users. Implemented WebSocket-based messaging for seamless real-time updates. Used MongoDB for efficient data storage and integrated advanced authentication mechanisms for secure user access. Ensured a responsive and user-friendly chat interface for optimal engagement.",
        category: "Web Development",
        link: "https://github.com/Lightning-01/Web-Chat",
    },
    {
        id: 6,
        image: Blog,
        title: "Blog Application",
        content: "Developed a full-stack blog platform with secure authentication and user management. Implemented full CRUD (Create, Read, Update, Delete) functionality, enabling users to manage blogs seamlessly. Integrated MongoDB Atlas for efficient data storage and JWT authentication for security, ensuring a user-friendly and robust platform.",
        category: "Web Development",
        link: "https://github.com/Lightning-01/Blog",
    },
    {
        id: 7,
        title: "Options & Pricing",
        image: Options,
        content: "Developed option pricing models for European Call and Put options using the Black-Scholes-Merton model and the N-step Binomial model. Analyzed option payoffs and visualized pricing trends using financial data.",
        category: "Machine Learning",
        link: "https://github.com/Lightning-01/Options-Pricing",
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Machine Learning",
    },
    {
        name: "Web Development",
    },
    {
        name: "Other",
    },
];