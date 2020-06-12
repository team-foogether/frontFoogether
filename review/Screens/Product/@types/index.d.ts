interface IReview {
    idx: number;
    title: string;
    originTitle: string;
    content: string;
    
    local : string;
    writerIdx: number;
    score: number;
    image: string;
    boardIdx: number;
    serviceCategory: string;
  }

interface IMeeting {
    idx : number;
    ownerIdx: number;
    imgUrl : string;
    endDate : string;
    endTime : string;
    endDayOfWeek : string;
    title : string;
    firstAddr : string;
    secondAddr : string;
    thirdAddr : string;
    status : string;
    maxMax : number;
    femMax : number;
    manNum : number;
    femNum : number;
    active : string;
}