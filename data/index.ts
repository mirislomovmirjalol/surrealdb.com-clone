export type TContentBlock = {
    title: string;
    content: string;
    image: string;
    imageAlt: string;
    imagePosition?: 'left' | 'right';
}
export const contentBlocks: TContentBlock[] = [
    {
        title: 'Database, realtime API layer, and security permissions all-in-one\n',
        content: 'SurrealDB combines the database layer, the querying layer, and the API and authentication layer into one platform. Advanced table-based and row-based customisable access permissions allow for granular data access patterns for different types of users. There\'s no need for custom backend code and security rules with complicated database development.',
        image: '/images/index/database-api-security.png',
        imageAlt: 'Image 1',
        imagePosition: "left",
    },
    {
        title: "Tables, documents, and graph. Store and model your data in any way\n",
        content: "As a multi-model database, SurrealDB enables developers to use multiple techniques to store and model data, without having to choose a method in advance. With the use of tables, SurrealDB has similarities with relational databases, but with the added functionality and flexibility of advanced nested fields and arrays. Inter-document record links allow for simple to understand and highly-performant related queries without the use of JOINs, eliminating the N+1 query problem.\n",
        image: '/images/index/multimodel-database.png',
        imageAlt: 'Image 2',
        imagePosition: "right",
    },
    {
        title: "Advanced inter-document relations and analysis. No JOINs. No pain.\n",
        content: "With full graph database functionality, SurrealDB enables more advanced querying and analysis. Records (or vertices) can be connected to one another with edges, each with its own record properties and metadata. Simple extensions to traditional SQL queries allow for multi-table, multi-depth document retrieval, efficiently in the database, without the use of complicated JOINs and without bringing the data down to the client.\n",
        image: '/images/index/graph-database.png',
        imageAlt: 'Image 3',
        imagePosition: "left",
    }
]
