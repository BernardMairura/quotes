export class Quote {
    public upVote:number;
    public downVote:number;
    public completeDate: Date

  constructor(public quote: string,public author: string,public editor:string)
  {  
 
    this.completeDate=new Date;
    this.upVote=0;
    this.downVote=0;
  }
    }
  
