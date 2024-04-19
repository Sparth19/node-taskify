import User from "../models/Users";
import Task from "../models/Tasks";

export const resolvers = {
  Query: {
    //Users
    getUser: async (parent: any, { id }: any, context: any) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (e) {
        console.log(e);
      }
    },

    //Tasks
    getTasks: async (parent: any, args: any, context: any) => {
      const tasks = Task.find({});
      return tasks;
    },
    getTasksById: async (parent: any, { id }: any, context: any) => {
      const task = Task.findById(id);
      return task;
    },
  },
  Mutation: {
    //User
    createUser: async (parent: any, { input }: any, context: any) => {
      const newUser = await User.create(input);
      return newUser;
    },

    //Tasks
    createTask: async (parent: any, { input }: any, context: any) => {
      const newTask = await Task.create(input);
      return newTask;
    },
    updateTask: async (parent: any, args: any, context: any) => {
      const task = await Task.findByIdAndUpdate(
        args.id,
        { ...args.input, updatedAt: Date.now() },
        { new: true }
      );
      return task;
    },
  },
};
