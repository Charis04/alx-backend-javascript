// React.ts
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number; // Declaration merging to add optional attribute
  }

  export class React extends Subject {
    public getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    public getAvailableTeacher(): string {
      if (
        this.teacher.experienceTeachingReact === undefined ||
        this.teacher.experienceTeachingReact === 0
      ) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
