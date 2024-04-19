import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar DateTime
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Task {
    id: ID!
    name: String!
    description: String
    status: TaskStatus
    createdAt: DateTime!
    updatedAt: DateTime!
    assignTo: User
    assignBy: User
  }

  enum TaskStatus {
    NEW
    IN_PROGRESS
    COMPLETED
  }

  enum DisplayMode {
    DARK
    LIGHT
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    username: String!
    languagePreference: String
    displayMode: DisplayMode
    notificationPermission: Boolean
  }

  input CreateTaskInput {
    name: String!
    description: String
    status: TaskStatus
    assignTo: ID
    assignBy: ID
  }

  type Query {
    getUser(id: ID): User

    getTasks: [Task!]!
    getTasksById(id: ID): Task
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!

    createTask(input: CreateTaskInput!): Task!
    updateTask(id: ID!, input: CreateTaskInput!): Task!
  }
`;
