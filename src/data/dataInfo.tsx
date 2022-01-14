
export interface ITodoDataItem {
  id: number;
  title: string;
  text: string;
  dateAdded: string;
  completed: boolean;
  priorty: number;
  [headerName: `x-${string}`]: string;
}

export interface ILoginUserInfo {
  id: number;
  fullName: string;
  username: string;
}

export class LoginUserInfo implements ILoginUserInfo {
  id: number;
  fullName: string;
  username: string;

  constructor(id: number, fullName: string, userName: string) {
    this.id = id;
    this.fullName = fullName;
    this.username = userName;
  }
}

export interface ITaskDataItem {
  id: number;
  title: string;
  description: string;
  status: number;
  dueDate: string;
  estimatedHours: number;
  assignee: number;
  rating?: { [assigneeId: string]: number | undefined };
}



export interface ITaskDataItems {
  data?: ITaskDataItem[];
  isLoading: boolean;
  showEditPopup: boolean;
  currentItem?: ITaskDataItem;
}
