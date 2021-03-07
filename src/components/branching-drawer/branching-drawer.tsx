import { Component, EventEmitter, h, Prop ,Event,State} from '@stencil/core';
// import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';

@Component({
  tag: 'branching-drawer',
  styleUrl: 'branching-drawer.scss',
  shadow: true,
})

export class BranchingDrawer {
  @Prop() branchingNumber: number;

  @Prop() branchOne: any;
  internalBranchOne: any[];

  @Prop() branchTwo: any;
  internalBranchTwo: any[];

  @Prop() branchThree: any;
  internalBranchThree: any[];


  @Prop() branchFour: any;
  internalBranchFour: any[];
  branchingArr: any = [
    {
      id: "tab-1",
      contentLabel: "t",
      highlightText: "ffff",
      contant1: "das",
      dataTip: "dasda",
      questions: []
    }, 2, 3, 4, 5];
    @Prop() content: string;
    @State() satate: any[] = [];
    @Event() updateSatisfiedEvent: EventEmitter<any>;
  
    allClicked(ind){
      console.log(ind);
      
        // const obj2=this.satate.find((o)=>o.index==ind);
        const obj2 = this.satate.findIndex((o) => o.index == ind);
        this.satate[obj2]["clicked"] = true;
        // console.log(obj2);
        // console.log(this.satate);
        if (this.satate.every((ox) => ox.clicked)) {
    
          this.updateSatisfiedEvent.emit(this.content)
    
          console.log("All clicked");
    
        }
    }
  
    private getContent(): any {
  
      const con = JSON.parse(this.content);
      return con.attributes;
    }
  
   
  constructor() {

    for (let i = 0; i < this.getContent().branchingNumber; i++) {
      this.satate.push({ index: i, clicked: false });
    }

    if (this.getContent().branchOne != null) {

      this.internalBranchOne = this.getContent().branchOne;
      // console.log(this.internalBranchOne);
    }
    if (this.getContent().branchTwo != null) {

      this.internalBranchTwo = this.getContent().branchTwo;
      // console.log(this.internalBranchTwo);
    }
    if (this.getContent().branchThree != null) {

      this.internalBranchThree = this.getContent().branchThree;
      // console.log(this.internalBranchThree);
    }

    if (this.getContent().branchFour != null) {

      this.internalBranchFour = this.getContent().branchFour;
      // console.log(this.internalBranchFour);
    }

    if (this.branchingArr.length != this.getContent().branchingNumber) {
      if (this.getContent().branchingNumber == 1) {
        this.branchingArr.length = 0;
        if (this.internalBranchOne[0].branchNumber == 0) {
          this.branchingArr.push(
            {
              id: "tab-1",
              contentLabel: this.internalBranchOne[0].contentLabel,
              highlightText: this.internalBranchOne[0].highlightText,
              contant1: this.internalBranchOne[0].contant,
              dataTip: this.internalBranchOne[0].dataTip,
              questions: []
            }
          );

        }
        else {
              if(this.internalBranchOne[0].branchNumber == 1){   
          this.branchingArr.push(
            {
              id: "tab-1",
              contentLabel: this.internalBranchOne[0].contentLabel,
              highlightText: this.internalBranchOne[0].highlightText,
              contant1: this.internalBranchOne[0].contant,
              dataTip: this.internalBranchOne[0].dataTip,
              questions: [
                {
                  q:
                  {
                    id: "question-1",
                     contant: this.internalBranchOne[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchOne[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchOne[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchOne[0].subBranches[0].subOne.dataTip
                  }

                }
              ]
            }

          );

              }else{

          this.branchingArr.push(
            {
              id: "tab-1",
              contentLabel: this.internalBranchOne[0].contentLabel,
              highlightText: this.internalBranchOne[0].highlightText,
              contant1: this.internalBranchOne[0].contant,
              dataTip: this.internalBranchOne[0].dataTip,
              questions: [
                {
                  q:
                  {
                    id: "question-1",
                     contant: this.internalBranchOne[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchOne[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchOne[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchOne[0].subBranches[0].subOne.dataTip
                  }

                }
                ,
                {
                  q:
                  {
                    id: "question-2",
                    contant: (this.internalBranchOne[0].subBranches[1].subTwo.contant?this.internalBranchOne[0].subBranches[1].subTwo.contant:null),
                    contentLabel:(this.internalBranchOne[0].subBranches[1].subTwo.contentLabel?this.internalBranchOne[0].subBranches[1].subTwo.contentLabel:null),
                    highlightText:(this.internalBranchOne[0].subBranches[1].subTwo.highlightText?this.internalBranchOne[0].subBranches[1].subTwo.highlightText:null),
                    dataTip:(this.internalBranchOne[0].subBranches[1].subTwo.dataTip?this.internalBranchOne[0].subBranches[1].subTwo.dataTip:null)
                  }

                }
              ]
            }

          );






              }



        }

      }

      /////2///////
      else if (this.getContent().branchingNumber == 2) {
        this.branchingArr.length = 0;
       
        if (this.internalBranchOne[0].branchNumber == 0  &&  this.internalBranchTwo[0].branchNumber == 0  ) {
          this.branchingArr.push(
            {
              id: "tab-1",
              contentLabel: this.internalBranchOne[0].contentLabel,
              highlightText: this.internalBranchOne[0].highlightText,
              contant1: this.internalBranchOne[0].contant,
              dataTip: this.internalBranchOne[0].dataTip,
              questions: []
            },
            {
              id: "tab-2",
              contentLabel: this.internalBranchTwo[0].contentLabel,
              highlightText: this.internalBranchTwo[0].highlightText,
              contant1: this.internalBranchTwo[0].contant,
              dataTip: this.internalBranchTwo[0].dataTip,
              questions: []
            }

          );

        }else if (this.internalBranchOne[0].branchNumber == 0  &&  this.internalBranchTwo[0].branchNumber > 0  ) {
           if(this.internalBranchTwo[0].branchNumber == 1){
            this.branchingArr.push(
              {
                id: "tab-1",
                contentLabel: this.internalBranchOne[0].contentLabel,
                highlightText: this.internalBranchOne[0].highlightText,
                contant1: this.internalBranchOne[0].contant,
                dataTip: this.internalBranchOne[0].dataTip,
                questions: []
              },
              {
                id: "tab-2",
                contentLabel: this.internalBranchTwo[0].contentLabel,
                highlightText: this.internalBranchTwo[0].highlightText,
                contant1: this.internalBranchTwo[0].contant,
                dataTip: this.internalBranchTwo[0].dataTip,
                questions: [
                  {
                    q:
                    {
                      id: "question-2",
                       contant: this.internalBranchTwo[0].subBranches[0].subOne.contant,
                      contentLabel:this.internalBranchTwo[0].subBranches[0].subOne.contentLabel,
                      highlightText:this.internalBranchTwo[0].subBranches[0].subOne.highlightText,
                      dataTip:this.internalBranchTwo[0].subBranches[0].subOne.dataTip
                    }
  
                  }
                ]
              }
  
            );
           }else{
            this.branchingArr.push(
              {
                id: "tab-1",
                contentLabel: this.internalBranchOne[0].contentLabel,
                highlightText: this.internalBranchOne[0].highlightText,
                contant1: this.internalBranchOne[0].contant,
                dataTip: this.internalBranchOne[0].dataTip,
                questions: []
              },
              {
                id: "tab-2",
                contentLabel: this.internalBranchTwo[0].contentLabel,
                highlightText: this.internalBranchTwo[0].highlightText,
                contant1: this.internalBranchTwo[0].contant,
                dataTip: this.internalBranchTwo[0].dataTip,
                questions: [
                  {
                    q:
                    {
                      id: "question-3",
                       contant: this.internalBranchTwo[0].subBranches[0].subOne.contant,
                      contentLabel:this.internalBranchTwo[0].subBranches[0].subOne.contentLabel,
                      highlightText:this.internalBranchTwo[0].subBranches[0].subOne.highlightText,
                      dataTip:this.internalBranchTwo[0].subBranches[0].subOne.dataTip
                    }
  
                  }
                  ,
                  {
                    q:
                    {
                      id: "question-4",
                      contant: (this.internalBranchTwo[0].subBranches[1].subTwo.contant?this.internalBranchTwo[0].subBranches[1].subTwo.contant:null),
                      contentLabel:(this.internalBranchTwo[0].subBranches[1].subTwo.contentLabel?this.internalBranchTwo[0].subBranches[1].subTwo.contentLabel:null),
                      highlightText:(this.internalBranchTwo[0].subBranches[1].subTwo.highlightText?this.internalBranchTwo[0].subBranches[1].subTwo.highlightText:null),
                      dataTip:(this.internalBranchTwo[0].subBranches[1].subTwo.dataTip?this.internalBranchTwo[0].subBranches[1].subTwo.dataTip:null)
                    }
  
                  }
                ]
              }
    
            );


           }
           
          

        }



        else if (this.internalBranchOne[0].branchNumber > 0  &&  this.internalBranchTwo[0].branchNumber == 0  ) {
          if(this.internalBranchOne[0].branchNumber == 1){
           this.branchingArr.push(
            {
              id: "tab-1",
              contentLabel: this.internalBranchOne[0].contentLabel,
              highlightText: this.internalBranchOne[0].highlightText,
              contant1: this.internalBranchOne[0].contant,
              dataTip: this.internalBranchOne[0].dataTip,
              questions: [
                {
                  q:
                  {
                    id: "question-1",
                     contant: this.internalBranchOne[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchOne[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchOne[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchOne[0].subBranches[0].subOne.dataTip
                  }

                }
              ]
            },
             {
              id: "tab-2",
              contentLabel: this.internalBranchTwo[0].contentLabel,
              highlightText: this.internalBranchTwo[0].highlightText,
              contant1: this.internalBranchTwo[0].contant,
              dataTip: this.internalBranchTwo[0].dataTip,
              questions: []
 
                 }
               
             
 
           );
          }else{
           this.branchingArr.push(
            {
              id: "tab-1",
              contentLabel: this.internalBranchOne[0].contentLabel,
              highlightText: this.internalBranchOne[0].highlightText,
              contant1: this.internalBranchOne[0].contant,
              dataTip: this.internalBranchOne[0].dataTip,
              questions: [
                {
                  q:
                  {
                    id: "question-1",
                     contant: this.internalBranchOne[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchOne[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchOne[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchOne[0].subBranches[0].subOne.dataTip
                  },
                  

                }
                ,
                {
                  q:
                  {
                    id: "question-2",
                    contant: (this.internalBranchOne[0].subBranches[1].subTwo.contant?this.internalBranchOne[0].subBranches[1].subTwo.contant:null),
                    contentLabel:(this.internalBranchOne[0].subBranches[1].subTwo.contentLabel?this.internalBranchOne[0].subBranches[1].subTwo.contentLabel:null),
                    highlightText:(this.internalBranchOne[0].subBranches[1].subTwo.highlightText?this.internalBranchOne[0].subBranches[1].subTwo.highlightText:null),
                    dataTip:(this.internalBranchOne[0].subBranches[1].subTwo.dataTip?this.internalBranchOne[0].subBranches[1].subTwo.dataTip:null)
                  }

                }
              ]
            } 
             ,

             {
              id: "tab-2",
              contentLabel: this.internalBranchTwo[0].contentLabel,
              highlightText: this.internalBranchTwo[0].highlightText,
              contant1: this.internalBranchTwo[0].contant,
              dataTip: this.internalBranchTwo[0].dataTip,
              questions: []
            }
            
           );
           

          }
          
         

       }

        else {
              if(this.internalBranchOne[0].branchNumber == 1 || this.internalBranchTwo[0].branchNumber == 1){   
          this.branchingArr.push(
            {
              id: "tab-1",
              contentLabel: this.internalBranchOne[0].contentLabel,
              highlightText: this.internalBranchOne[0].highlightText,
              contant1: this.internalBranchOne[0].contant,
              dataTip: this.internalBranchOne[0].dataTip,
              questions: [
                {
                  q:
                  {
                    id: "question-1",
                     contant: this.internalBranchOne[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchOne[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchOne[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchOne[0].subBranches[0].subOne.dataTip
                  }

                }
              ]
            }
            ,
            {
              id: "tab-2",
              contentLabel: this.internalBranchTwo[0].contentLabel,
              highlightText: this.internalBranchTwo[0].highlightText,
              contant1: this.internalBranchTwo[0].contant,
              dataTip: this.internalBranchTwo[0].dataTip,
              questions: [
                {
                  q:
                  {
                    id: "question-2",
                     contant: this.internalBranchTwo[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchTwo[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchTwo[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchTwo[0].subBranches[0].subOne.dataTip
                  }

                }
              ]
            }

          );

              }else{

          this.branchingArr.push(
            {
              id: "tab-1",
              contentLabel: this.internalBranchOne[0].contentLabel,
              highlightText: this.internalBranchOne[0].highlightText,
              contant1: this.internalBranchOne[0].contant,
              dataTip: this.internalBranchOne[0].dataTip,
              questions: [
                {
                  q:
                  {
                    id: "question-1",
                     contant: this.internalBranchOne[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchOne[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchOne[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchOne[0].subBranches[0].subOne.dataTip
                  },
                  

                }
                ,
                {
                  q:
                  {
                    id: "question-2",
                    contant: (this.internalBranchOne[0].subBranches[1].subTwo.contant?this.internalBranchOne[0].subBranches[1].subTwo.contant:null),
                    contentLabel:(this.internalBranchOne[0].subBranches[1].subTwo.contentLabel?this.internalBranchOne[0].subBranches[1].subTwo.contentLabel:null),
                    highlightText:(this.internalBranchOne[0].subBranches[1].subTwo.highlightText?this.internalBranchOne[0].subBranches[1].subTwo.highlightText:null),
                    dataTip:(this.internalBranchOne[0].subBranches[1].subTwo.dataTip?this.internalBranchOne[0].subBranches[1].subTwo.dataTip:null)
                  }

                }
              ]
            },
            {
              id: "tab-2",
              contentLabel: this.internalBranchTwo[0].contentLabel,
              highlightText: this.internalBranchTwo[0].highlightText,
              contant1: this.internalBranchTwo[0].contant,
              dataTip: this.internalBranchTwo[0].dataTip,
              questions: [
                {
                  q:
                  {
                    id: "question-3",
                     contant: this.internalBranchTwo[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchTwo[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchTwo[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchTwo[0].subBranches[0].subOne.dataTip
                  }

                }
                ,
                {
                  q:
                  {
                    id: "question-4",
                    contant: (this.internalBranchTwo[0].subBranches[1].subTwo.contant?this.internalBranchTwo[0].subBranches[1].subTwo.contant:null),
                    contentLabel:(this.internalBranchTwo[0].subBranches[1].subTwo.contentLabel?this.internalBranchTwo[0].subBranches[1].subTwo.contentLabel:null),
                    highlightText:(this.internalBranchTwo[0].subBranches[1].subTwo.highlightText?this.internalBranchTwo[0].subBranches[1].subTwo.highlightText:null),
                    dataTip:(this.internalBranchTwo[0].subBranches[1].subTwo.dataTip?this.internalBranchTwo[0].subBranches[1].subTwo.dataTip:null)
                  }

                }
              ]
            }


          );






              }



        }
       
    

      }

      /////////////end of 2///////////////////////

/////3 new ///////
else if (this.getContent().branchingNumber == 3) {
    this.branchingArr.length = 0;
   
    if (this.internalBranchOne[0].branchNumber == 0  &&  this.internalBranchTwo[0].branchNumber == 0  && this.internalBranchThree[0].branchNumber == 0  ) {
      this.branchingArr.push(
        {
          id: "tab-1",
          contentLabel: this.internalBranchOne[0].contentLabel,
          highlightText: this.internalBranchOne[0].highlightText,
          contant1: this.internalBranchOne[0].contant,
          dataTip: this.internalBranchOne[0].dataTip,
          questions: []
        },
        {
          id: "tab-2",
          contentLabel: this.internalBranchTwo[0].contentLabel,
          highlightText: this.internalBranchTwo[0].highlightText,
          contant1: this.internalBranchTwo[0].contant,
          dataTip: this.internalBranchTwo[0].dataTip,
          questions: []
        }
        ,
        {
          id: "tab-3",
          contentLabel: this.internalBranchThree[0].contentLabel,
          highlightText: this.internalBranchThree[0].highlightText,
          contant1: this.internalBranchThree[0].contant,
          dataTip: this.internalBranchThree[0].dataTip,
          questions: []
        }
      );
      // console.log(this.branchingArr);

    }else if (this.internalBranchOne[0].branchNumber == 0  &&  this.internalBranchTwo[0].branchNumber > 0  &&  this.internalBranchThree[0].branchNumber > 0  ) {
       if(this.internalBranchTwo[0].branchNumber == 1   &&  this.internalBranchThree[0].branchNumber == 1   ){
        this.branchingArr.push(
          {
            id: "tab-1",
            contentLabel: this.internalBranchOne[0].contentLabel,
            highlightText: this.internalBranchOne[0].highlightText,
            contant1: this.internalBranchOne[0].contant,
            dataTip: this.internalBranchOne[0].dataTip,
            questions: []
          },
          {
            id: "tab-2",
            contentLabel: this.internalBranchTwo[0].contentLabel,
            highlightText: this.internalBranchTwo[0].highlightText,
            contant1: this.internalBranchTwo[0].contant,
            dataTip: this.internalBranchTwo[0].dataTip,
            questions: [
              {
                q:
                {
                  id: "question-2",
                   contant: this.internalBranchTwo[0].subBranches[0].subOne.contant,
                  contentLabel:this.internalBranchTwo[0].subBranches[0].subOne.contentLabel,
                  highlightText:this.internalBranchTwo[0].subBranches[0].subOne.highlightText,
                  dataTip:this.internalBranchTwo[0].subBranches[0].subOne.dataTip
                }

              }
            ]
          }
        ,
          {
            id: "tab-3",
            contentLabel: this.internalBranchThree[0].contentLabel,
            highlightText: this.internalBranchThree[0].highlightText,
            contant1: this.internalBranchThree[0].contant,
            dataTip: this.internalBranchThree[0].dataTip,
            questions: [
              {
                q:
                {
                  id: "question-3",
                   contant: this.internalBranchThree[0].subBranches[0].subOne.contant,
                  contentLabel:this.internalBranchThree[0].subBranches[0].subOne.contentLabel,
                  highlightText:this.internalBranchThree[0].subBranches[0].subOne.highlightText,
                  dataTip:this.internalBranchThree[0].subBranches[0].subOne.dataTip
                }

              }
            ]
          }


        );


       }else{
        this.branchingArr.push(
          {
            id: "tab-1",
            contentLabel: this.internalBranchOne[0].contentLabel,
            highlightText: this.internalBranchOne[0].highlightText,
            contant1: this.internalBranchOne[0].contant,
            dataTip: this.internalBranchOne[0].dataTip,
            questions: []
          },
          {
            id: "tab-2",
            contentLabel: this.internalBranchTwo[0].contentLabel,
            highlightText: this.internalBranchTwo[0].highlightText,
            contant1: this.internalBranchTwo[0].contant,
            dataTip: this.internalBranchTwo[0].dataTip,
            questions: [
              {
                q:
                {
                  id: "question-3",
                   contant: this.internalBranchTwo[0].subBranches[0].subOne.contant,
                  contentLabel:this.internalBranchTwo[0].subBranches[0].subOne.contentLabel,
                  highlightText:this.internalBranchTwo[0].subBranches[0].subOne.highlightText,
                  dataTip:this.internalBranchTwo[0].subBranches[0].subOne.dataTip
                }

              }
              ,
              {
                q:
                {
                  id: "question-4",
                  contant: (this.internalBranchTwo[0].subBranches[1].subTwo.contant?this.internalBranchTwo[0].subBranches[1].subTwo.contant:null),
                  contentLabel:(this.internalBranchTwo[0].subBranches[1].subTwo.contentLabel?this.internalBranchTwo[0].subBranches[1].subTwo.contentLabel:null),
                  highlightText:(this.internalBranchTwo[0].subBranches[1].subTwo.highlightText?this.internalBranchTwo[0].subBranches[1].subTwo.highlightText:null),
                  dataTip:(this.internalBranchTwo[0].subBranches[1].subTwo.dataTip?this.internalBranchTwo[0].subBranches[1].subTwo.dataTip:null)
                }

              }
            ]
          },
          {
            id: "tab-3",
            contentLabel: this.internalBranchThree[0].contentLabel,
            highlightText: this.internalBranchThree[0].highlightText,
            contant1: this.internalBranchThree[0].contant,
            dataTip: this.internalBranchThree[0].dataTip,
            questions: [
              {
                q:
                {
                  id: "question-5",
                   contant: this.internalBranchThree[0].subBranches[0].subOne.contant,
                  contentLabel:this.internalBranchThree[0].subBranches[0].subOne.contentLabel,
                  highlightText:this.internalBranchThree[0].subBranches[0].subOne.highlightText,
                  dataTip:this.internalBranchThree[0].subBranches[0].subOne.dataTip
                }

              },
              {
                q:
                {
                  id: "question-6",
                  contant: (this.internalBranchThree[0].subBranches[1].subTwo.contant?this.internalBranchThree[0].subBranches[1].subTwo.contant:null),
                  contentLabel:(this.internalBranchThree[0].subBranches[1].subTwo.contentLabel?this.internalBranchThree[0].subBranches[1].subTwo.contentLabel:null),
                  highlightText:(this.internalBranchThree[0].subBranches[1].subTwo.highlightText?this.internalBranchThree[0].subBranches[1].subTwo.highlightText:null),
                  dataTip:(this.internalBranchThree[0].subBranches[1].subTwo.dataTip?this.internalBranchThree[0].subBranches[1].subTwo.dataTip:null)
                }

              }
            ]
          }

          
        );

        // console.log(this.branchingArr);

       }
       
      

    }


    else {
      // console.log("Tttttt");
         
          if(this.internalBranchOne[0].branchNumber == 1 && this.internalBranchTwo[0].branchNumber == 1 && this.internalBranchThree[0].branchNumber == 1  ){   
      this.branchingArr.push(
        {
          id: "tab-1",
          contentLabel: this.internalBranchOne[0].contentLabel,
          highlightText: this.internalBranchOne[0].highlightText,
          contant1: this.internalBranchOne[0].contant,
          dataTip: this.internalBranchOne[0].dataTip,
          questions: [
            {
              q:
              {
                id: "question-1",
                 contant: this.internalBranchOne[0].subBranches[0].subOne.contant,
                contentLabel:this.internalBranchOne[0].subBranches[0].subOne.contentLabel,
                highlightText:this.internalBranchOne[0].subBranches[0].subOne.highlightText,
                dataTip:this.internalBranchOne[0].subBranches[0].subOne.dataTip
              },
              

            }
      
          ]
        },
        {
          id: "tab-2",
          contentLabel: this.internalBranchTwo[0].contentLabel,
          highlightText: this.internalBranchTwo[0].highlightText,
          contant1: this.internalBranchTwo[0].contant,
          dataTip: this.internalBranchTwo[0].dataTip,
          questions: [
            {
              q:
              {
                id: "question-3",
                 contant: this.internalBranchTwo[0].subBranches[0].subOne.contant,
                contentLabel:this.internalBranchTwo[0].subBranches[0].subOne.contentLabel,
                highlightText:this.internalBranchTwo[0].subBranches[0].subOne.highlightText,
                dataTip:this.internalBranchTwo[0].subBranches[0].subOne.dataTip
              }

            }
          ]
        },
        {
       
          id: "tab-3",
          contentLabel: this.internalBranchThree[0].contentLabel,
                  highlightText: this.internalBranchThree[0].highlightText,
                  contant1: this.internalBranchThree[0].contant,
                  dataTip: this.internalBranchThree[0].dataTip,  
          questions: [
            {
              
              q:
              {
                id: "question-5",
                 contant: this.internalBranchThree[0].subBranches[0].subOne.contant,
                contentLabel:this.internalBranchThree[0].subBranches[0].subOne.contentLabel,
                highlightText:this.internalBranchThree[0].subBranches[0].subOne.highlightText,
                dataTip:this.internalBranchThree[0].subBranches[0].subOne.dataTip
              }
  
               

            }
      
          ]

          }

      );
     
      
          }
      
          else{

      this.branchingArr.push(
        {
          id: "tab-1",
          contentLabel: this.internalBranchOne[0].contentLabel,
          highlightText: this.internalBranchOne[0].highlightText,
          contant1: this.internalBranchOne[0].contant,
          dataTip: this.internalBranchOne[0].dataTip,
          questions: [
            {
              q:
              {
                id: "question-1",
                 contant: this.internalBranchOne[0].subBranches[0].subOne.contant,
                contentLabel:this.internalBranchOne[0].subBranches[0].subOne.contentLabel,
                highlightText:this.internalBranchOne[0].subBranches[0].subOne.highlightText,
                dataTip:this.internalBranchOne[0].subBranches[0].subOne.dataTip
              },
              

            }
            ,
            {
              q:
              {
                id: "question-2",
                contant: (this.internalBranchOne[0].subBranches[1].subTwo.contant?this.internalBranchOne[0].subBranches[1].subTwo.contant:null),
                contentLabel:(this.internalBranchOne[0].subBranches[1].subTwo.contentLabel?this.internalBranchOne[0].subBranches[1].subTwo.contentLabel:null),
                highlightText:(this.internalBranchOne[0].subBranches[1].subTwo.highlightText?this.internalBranchOne[0].subBranches[1].subTwo.highlightText:null),
                dataTip:(this.internalBranchOne[0].subBranches[1].subTwo.dataTip?this.internalBranchOne[0].subBranches[1].subTwo.dataTip:null)
              }

            }
          ]
        },
        {
          id: "tab-2",
          contentLabel: this.internalBranchTwo[0].contentLabel,
          highlightText: this.internalBranchTwo[0].highlightText,
          contant1: this.internalBranchTwo[0].contant,
          dataTip: this.internalBranchTwo[0].dataTip,
          questions: [
            {
              q:
              {
                id: "question-3",
                 contant: this.internalBranchTwo[0].subBranches[0].subOne.contant,
                contentLabel:this.internalBranchTwo[0].subBranches[0].subOne.contentLabel,
                highlightText:this.internalBranchTwo[0].subBranches[0].subOne.highlightText,
                dataTip:this.internalBranchTwo[0].subBranches[0].subOne.dataTip
              }

            }
            ,
            {
              q:
              {
                id: "question-4",
                contant: (this.internalBranchTwo[0].subBranches[1].subTwo.contant?this.internalBranchTwo[0].subBranches[1].subTwo.contant:null),
                contentLabel:(this.internalBranchTwo[0].subBranches[1].subTwo.contentLabel?this.internalBranchTwo[0].subBranches[1].subTwo.contentLabel:null),
                highlightText:(this.internalBranchTwo[0].subBranches[1].subTwo.highlightText?this.internalBranchTwo[0].subBranches[1].subTwo.highlightText:null),
                dataTip:(this.internalBranchTwo[0].subBranches[1].subTwo.dataTip?this.internalBranchTwo[0].subBranches[1].subTwo.dataTip:null)
              }

            }
          ]
        },


        {
       
          id: "tab-3",
          contentLabel: this.internalBranchThree[0].contentLabel,
                  highlightText: this.internalBranchThree[0].highlightText,
                  contant1: this.internalBranchThree[0].contant,
                  dataTip: this.internalBranchThree[0].dataTip,  
          questions: [
            {
              
              
                q:
                {
                  id: "question-5",
                   contant: this.internalBranchThree[0].subBranches[0].subOne.contant,
                  contentLabel:this.internalBranchThree[0].subBranches[0].subOne.contentLabel,
                  highlightText:this.internalBranchThree[0].subBranches[0].subOne.highlightText,
                  dataTip:this.internalBranchThree[0].subBranches[0].subOne.dataTip
                }

            },
            {

    
                q:
                {
                  id: "question-6",
                  contant: (this.internalBranchThree[0].subBranches[1].subTwo.contant?this.internalBranchThree[0].subBranches[1].subTwo.contant:null),
                  contentLabel:(this.internalBranchThree[0].subBranches[1].subTwo.contentLabel?this.internalBranchThree[0].subBranches[1].subTwo.contentLabel:null),
                  highlightText:(this.internalBranchThree[0].subBranches[1].subTwo.highlightText?this.internalBranchThree[0].subBranches[1].subTwo.highlightText:null),
                  dataTip:(this.internalBranchThree[0].subBranches[1].subTwo.dataTip?this.internalBranchThree[0].subBranches[1].subTwo.dataTip:null)
                }
              }
          ]

          }

      );





          }



    }
   


  }

  /////////////end of 3 new///////////////////////



  /////////////start of  new 4///////////////////////

  else if (this.getContent().branchingNumber == 4) {
    this.branchingArr.length = 0;
   
    if (this.internalBranchOne[0].branchNumber == 0  &&  this.internalBranchTwo[0].branchNumber == 0  
        && this.internalBranchThree[0].branchNumber == 0  && this.internalBranchFour[0].branchNumber == 0  ) {
      this.branchingArr.push(
        {
          id: "tab-1",
          contentLabel: this.internalBranchOne[0].contentLabel,
          highlightText: this.internalBranchOne[0].highlightText,
          contant1: this.internalBranchOne[0].contant,
          dataTip: this.internalBranchOne[0].dataTip,
          questions: []
        },
        {
          id: "tab-2",
          contentLabel: this.internalBranchTwo[0].contentLabel,
          highlightText: this.internalBranchTwo[0].highlightText,
          contant1: this.internalBranchTwo[0].contant,
          dataTip: this.internalBranchTwo[0].dataTip,
          questions: []
        }
        ,
        {
          id: "tab-3",
          contentLabel: this.internalBranchThree[0].contentLabel,
          highlightText: this.internalBranchThree[0].highlightText,
          contant1: this.internalBranchThree[0].contant,
          dataTip: this.internalBranchThree[0].dataTip,
          questions: []
        },
        {
          id: "tab-4",
          contentLabel: this.internalBranchFour[0].contentLabel,
          highlightText: this.internalBranchFour[0].highlightText,
          contant1: this.internalBranchFour[0].contant,
          dataTip: this.internalBranchFour[0].dataTip,
          questions: []
        }
      );
      // console.log(this.branchingArr);

    }else if (this.internalBranchOne[0].branchNumber == 1  &&  this.internalBranchTwo[0].branchNumber == 1  &&  this.internalBranchThree[0].branchNumber == 1  && this.internalBranchFour[0].branchNumber == 1 ) {

        this.branchingArr.push(
          {
            id: "tab-1",
            contentLabel: this.internalBranchOne[0].contentLabel,
            highlightText: this.internalBranchOne[0].highlightText,
            contant1: this.internalBranchOne[0].contant,
            dataTip: this.internalBranchOne[0].dataTip,
            questions: [
                {
                  q:
                  {
                    id: "question-1",
                     contant: this.internalBranchOne[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchOne[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchOne[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchOne[0].subBranches[0].subOne.dataTip
                  }
  
                }
              ]
          },
          {
            id: "tab-2",
            contentLabel: this.internalBranchTwo[0].contentLabel,
            highlightText: this.internalBranchTwo[0].highlightText,
            contant1: this.internalBranchTwo[0].contant,
            dataTip: this.internalBranchTwo[0].dataTip,
            questions: [
              {
                q:
                {
                  id: "question-2",
                   contant: this.internalBranchTwo[0].subBranches[0].subOne.contant,
                  contentLabel:this.internalBranchTwo[0].subBranches[0].subOne.contentLabel,
                  highlightText:this.internalBranchTwo[0].subBranches[0].subOne.highlightText,
                  dataTip:this.internalBranchTwo[0].subBranches[0].subOne.dataTip
                }

              }
            ]
          }
        ,
          {
            id: "tab-3",
            contentLabel: this.internalBranchThree[0].contentLabel,
            highlightText: this.internalBranchThree[0].highlightText,
            contant1: this.internalBranchThree[0].contant,
            dataTip: this.internalBranchThree[0].dataTip,
            questions: [
              {
                q:
                {
                  id: "question-3",
                   contant: this.internalBranchThree[0].subBranches[0].subOne.contant,
                  contentLabel:this.internalBranchThree[0].subBranches[0].subOne.contentLabel,
                  highlightText:this.internalBranchThree[0].subBranches[0].subOne.highlightText,
                  dataTip:this.internalBranchThree[0].subBranches[0].subOne.dataTip
                }

              }
            ]
          }, {
         
            id: "tab-4",
            contentLabel: this.internalBranchFour[0].contentLabel,
                    highlightText: this.internalBranchFour[0].highlightText,
                    contant1: this.internalBranchFour[0].contant,
                    dataTip: this.internalBranchFour[0].dataTip,  
            questions: [
              {
                
                
                  q:
                  {
                    id: "question-7",
                     contant: this.internalBranchFour[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchFour[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchFour[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchFour[0].subBranches[0].subOne.dataTip
                  }
  
              }
            ]
  
            }

        );

        }
    else {
      this.branchingArr.push(
        {
          id: "tab-1",
          contentLabel: this.internalBranchOne[0].contentLabel,
          highlightText: this.internalBranchOne[0].highlightText,
          contant1: this.internalBranchOne[0].contant,
          dataTip: this.internalBranchOne[0].dataTip,
          questions: [
            {
              q:
              {
                id: "question-1",
                 contant: this.internalBranchOne[0].subBranches[0].subOne.contant,
                contentLabel:this.internalBranchOne[0].subBranches[0].subOne.contentLabel,
                highlightText:this.internalBranchOne[0].subBranches[0].subOne.highlightText,
                dataTip:this.internalBranchOne[0].subBranches[0].subOne.dataTip
              },
              

            }
            ,
            {
              q:
              {
                id: "question-2",
                contant: (this.internalBranchOne[0].subBranches[1].subTwo.contant?this.internalBranchOne[0].subBranches[1].subTwo.contant:null),
                contentLabel:(this.internalBranchOne[0].subBranches[1].subTwo.contentLabel?this.internalBranchOne[0].subBranches[1].subTwo.contentLabel:null),
                highlightText:(this.internalBranchOne[0].subBranches[1].subTwo.highlightText?this.internalBranchOne[0].subBranches[1].subTwo.highlightText:null),
                dataTip:(this.internalBranchOne[0].subBranches[1].subTwo.dataTip?this.internalBranchOne[0].subBranches[1].subTwo.dataTip:null)
              }

            }
          ]
        },
        {
          id: "tab-2",
          contentLabel: this.internalBranchTwo[0].contentLabel,
          highlightText: this.internalBranchTwo[0].highlightText,
          contant1: this.internalBranchTwo[0].contant,
          dataTip: this.internalBranchTwo[0].dataTip,
          questions: [
            {
              q:
              {
                id: "question-3",
                 contant: this.internalBranchTwo[0].subBranches[0].subOne.contant,
                contentLabel:this.internalBranchTwo[0].subBranches[0].subOne.contentLabel,
                highlightText:this.internalBranchTwo[0].subBranches[0].subOne.highlightText,
                dataTip:this.internalBranchTwo[0].subBranches[0].subOne.dataTip
              }

            }
            ,
            {
              q:
              {
                id: "question-4",
                contant: (this.internalBranchTwo[0].subBranches[1].subTwo.contant?this.internalBranchTwo[0].subBranches[1].subTwo.contant:null),
                contentLabel:(this.internalBranchTwo[0].subBranches[1].subTwo.contentLabel?this.internalBranchTwo[0].subBranches[1].subTwo.contentLabel:null),
                highlightText:(this.internalBranchTwo[0].subBranches[1].subTwo.highlightText?this.internalBranchTwo[0].subBranches[1].subTwo.highlightText:null),
                dataTip:(this.internalBranchTwo[0].subBranches[1].subTwo.dataTip?this.internalBranchTwo[0].subBranches[1].subTwo.dataTip:null)
              }

            }
          ]
        },
        {
       
          id: "tab-3",
          contentLabel: this.internalBranchThree[0].contentLabel,
                  highlightText: this.internalBranchThree[0].highlightText,
                  contant1: this.internalBranchThree[0].contant,
                  dataTip: this.internalBranchThree[0].dataTip,  
          questions: [
            {
              
              
                q:
                {
                  id: "question-5",
                   contant: this.internalBranchThree[0].subBranches[0].subOne.contant,
                  contentLabel:this.internalBranchThree[0].subBranches[0].subOne.contentLabel,
                  highlightText:this.internalBranchThree[0].subBranches[0].subOne.highlightText,
                  dataTip:this.internalBranchThree[0].subBranches[0].subOne.dataTip
                }

            },
            {

    
                q:
                {
                  id: "question-6",
                  contant: (this.internalBranchThree[0].subBranches[1].subTwo.contant?this.internalBranchThree[0].subBranches[1].subTwo.contant:null),
                  contentLabel:(this.internalBranchThree[0].subBranches[1].subTwo.contentLabel?this.internalBranchThree[0].subBranches[1].subTwo.contentLabel:null),
                  highlightText:(this.internalBranchThree[0].subBranches[1].subTwo.highlightText?this.internalBranchThree[0].subBranches[1].subTwo.highlightText:null),
                  dataTip:(this.internalBranchThree[0].subBranches[1].subTwo.dataTip?this.internalBranchThree[0].subBranches[1].subTwo.dataTip:null)
                }
              }
          ]

          }
          ,
          {
         
            id: "tab-4",
            contentLabel: this.internalBranchFour[0].contentLabel,
                    highlightText: this.internalBranchFour[0].highlightText,
                    contant1: this.internalBranchFour[0].contant,
                    dataTip: this.internalBranchFour[0].dataTip,  
            questions: [
              {
                
                
                  q:
                  {
                    id: "question-7",
                     contant: this.internalBranchFour[0].subBranches[0].subOne.contant,
                    contentLabel:this.internalBranchFour[0].subBranches[0].subOne.contentLabel,
                    highlightText:this.internalBranchFour[0].subBranches[0].subOne.highlightText,
                    dataTip:this.internalBranchFour[0].subBranches[0].subOne.dataTip
                  }
  
              },
              {
  
      
                  q:
                  {
                    id: "question-8",
                    contant: (this.internalBranchFour[0].subBranches[1].subTwo.contant?this.internalBranchFour[0].subBranches[1].subTwo.contant:null),
                    contentLabel:(this.internalBranchFour[0].subBranches[1].subTwo.contentLabel?this.internalBranchFour[0].subBranches[1].subTwo.contentLabel:null),
                    highlightText:(this.internalBranchFour[0].subBranches[1].subTwo.highlightText?this.internalBranchFour[0].subBranches[1].subTwo.highlightText:null),
                    dataTip:(this.internalBranchFour[0].subBranches[1].subTwo.dataTip?this.internalBranchFour[0].subBranches[1].subTwo.dataTip:null)
                  }
                }
            ]
  
            }
  
      );





          }



    
   


  }

  /////////////end of 4 new///////////////////////


    } else {
          console.log("Errrorrr");
          
    }
  }

  render() {
    var content0 = [];
    var content1 = [];
    var content2 = [];
    var content3 = [];

    var qs0 = [];
    var qs1 = [];
    var qs2 = [];
    var qs3 = [];
    this.branchingArr.map((item, index2) => {
   
      if (index2 == 0) {
        if (item.questions.length == 0) {
          content0.push(item)
         
        }
        else {

          item.questions.map((item2) => {
            qs0.push(item2)
          });








        }






      }
      ////////////////// 2/////////////////////
      else if (index2 == 1) {

        if (item.questions.length == 0) {
          content1.push(item)

        }
        else {
          item.questions.map((item2) => {
            qs1.push(item2)
            // console.log(qs0.length);

          });

        }
      }
      ////////////////////////////end of 2///////////////////////////


      //////////////////   3  /////////////////////
      else if (index2 == 2) {
        if (item.questions.length == 0) {
          content2.push(item)

        }
        else {
          item.questions.map((item2) => {
            qs2.push(item2)

          });

        }
      }
      ////////////////////////////end of 3///////////////////////////

      //////////////////   4  /////////////////////
      else if (index2 == 3) {
        if (item.questions.length == 0) {
          content3.push(item)

        }
        else {
          item.questions.map((item2) => {
            qs3.push(item2)

          });

        }
      }
      ////////////////////////////end of 3///////////////////////////















    });




    return (
      <div class="wrapper NeueFrutigerWorld">

        {this.branchingArr.map((item, index) =>
        
          <div class="wrap-3"  onClick={this.allClicked.bind(this,index)}>
            <input type="radio" id={item.id} name="tabs"></input>
            <label htmlFor={item.id}><div> {item.contentLabel}</div><div class="cross"></div></label>
           
            {(() => {
              if (index == 0 && content0.length != 0) {
                return (
                  <div class="content">
                    {/* {content0.map(i2=>{ */}
                    {content0[0].contant1}
                    <div>
                      {content0[0].highlightText ?
                        <span class="tip" title={item.dataTip} data-tip={item.dataTip}>
                          {item.highlightText}
                        </span>
                        : ''}
                    </div>



                    {/* } */}

                    {/* )} */}




                  </div>
                )
              }
              else if (index == 0 && qs0.length != 0) {
                return (
                  <div class="questions">
                    {qs0.map(i =>
                      <div class="question-wrap" >
                        <input type="radio" id={i.q.id} name="question"  ></input>
                        <label htmlFor={i.q.id}><div>{i.q.contentLabel}</div> <div  class="cross"></div></label>

                        <div class="content">
                          {i.q.highlightText != null ?
                            <span class="tip"  title={item.dataTip}   data-tip={item.dataTip}>
                              {i.q.highlightText}
                            </span>
                            : ''}
                          {i.q.contant}
                        </div>
                      </div>
                    )
                    }

                  </div>
                );

              } else {
                return (
                  ''
                )
              }
            })()}


            {/* ////////////////////1//////////////////////////////// */}
            {(() => {
              if (index == 1 && content1.length != 0) {
                return (
                  <div class="content">

                    {content1[0].contant1}
                    <div>
                      {content1[0].highlightText ?
                        <span class="tip"  title={item.dataTip}  data-tip={item.dataTip}>
                          {item.highlightText}
                        </span>
                        : ''}
                    </div>



                  </div>
                )
              }
              else if (index == 1 && qs1.length != 0) {
                return (
                  <div class="questions">
                    {qs1.map(i =>
                      <div class="question-wrap">
                        <input type="radio" id={i.q.id} name="question"></input>
                        <label htmlFor={i.q.id}><div>{i.q.contentLabel}</div> <div class="cross"></div></label>

                        <div class="content">
                          {i.q.highlightText != null ?
                            <span class="tip"   title={item.dataTip}  data-tip={item.dataTip}>
                              {i.q.highlightText}
                            </span>
                            : ''}
                          {i.q.contant}
                        </div>
                      </div>
                    )
                    }

                  </div>
                );

              } else {
                return (
                  ''
                )
              }
            })()}
            {/* ///////////////////// end of 1 //////////////////////////////// */}


            {/* ////////////////////2//////////////////////////////// */}
            {(() => {
              if (index == 2 && content2.length != 0) {
                return (
                  <div class="content">

                    {content2[0].contant1}
                    <div>
                      {content2[0].highlightText ?
                        <span class="tip" title={item.dataTip}  data-tip={item.dataTip}>
                          {item.highlightText}
                        </span>
                        : ''}
                    </div>



                  </div>
                )
              }
              else if (index == 2 && qs1.length != 0) {
                return (
                  <div class="questions">
                    {qs2.map(i =>
                      <div class="question-wrap">
                        <input type="radio" id={i.q.id} name="question"></input>
                        <label htmlFor={i.q.id}><div>{i.q.contentLabel}</div> <div class="cross"></div></label>

                        <div class="content">
                          {i.q.highlightText != null ?
                            <span class="tip" title={item.dataTip}  data-tip={item.dataTip}>
                              {i.q.highlightText}
                            </span>
                            : ''}
                          {i.q.contant}
                        </div>
                      </div>
                    )
                    }

                  </div>
                );

              } else {
                return (
                  ''
                )
              }
            })()}
            {/* ///////////////////// end of 2 //////////////////////////////// */}



            {/* ////////////////////3//////////////////////////////// */}
            {(() => {
              if (index == 3 && content3.length != 0) {
                return (
                  <div class="content">

                    {content3[0].contant1}
                    <div>
                      {content3[0].highlightText ?
                        <span class="tip" title={item.dataTip}  data-tip={item.dataTip}>
                          {item.highlightText}
                        </span>
                        : ''}
                    </div>



                  </div>
                )
              }
              else if (index == 3 && qs3.length != 0) {
              
                return (
                  <div class="questions">
                    {qs3.map(i =>
                      <div class="question-wrap">
                        <input type="radio" id={i.q.id} name="question"></input>
                        <label htmlFor={i.q.id}><div>{i.q.contentLabel}</div> <div class="cross"></div></label>
                               
                        <div class="content">
                          {i.q.highlightText != null ?
                            <span class="tip" title={item.dataTip}  data-tip={item.dataTip}>
                              {i.q.highlightText}
                            </span>
                            : ''}
                          {i.q.contant}
                        </div>
                      </div>
                    )
                    }

                  </div>
                );

              } else {
                return (
                  ''
                )
              }
            })()}
            {/* ///////////////////// end of 3 //////////////////////////////// */}




          </div>
        )
        }










      </div>
    );
  }

}
