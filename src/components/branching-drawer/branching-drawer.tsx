import { Component, h, Prop } from '@stencil/core';
// import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';

@Component({
  tag: 'branching-drawer',
  styleUrl: 'branching-drawer.css',
  shadow: true,
})

export class BranchingDrawer {
  @Prop() branchingNumber: number;

  branchingArr: any[] = [1, 2, 3, 4, 5];

  constructor() {
    if (this.branchingArr.length != this.branchingNumber) {
      if (this.branchingNumber == 1) {
        this.branchingArr.length = 0;
        console.log(this.branchingNumber);
        console.log(this.branchingArr);

        this.branchingArr.push(
          {
            id: "tab-1",
            contentLabel: "Test01",
            highlightText: "terrwerwe0",
            contant1: "Test0 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              {
                q:
                {
                  id: "question-1",
                  contant: "Test1 Contant",
                  contentLabel: "Test1",
                  // highlightText:"terrwerwe1",
                  // dataTip:"fsdfsdf1"
                }

              }
              ,
              {
                q:
                {
                  id: "question-2",
                  contant: "Test2 Contant2",
                  contentLabel: "Test1222",
                  highlightText: "terrwerwe1222",
                  dataTip: "fsdfsdf122222"
                }

              }



            ]
          });
      }

      /////2///////
      else if (this.branchingNumber == 2) {
        this.branchingArr.length = 0;
        this.branchingArr.push(
          {
            id: "tab-1",
            contentLabel: "Test01",
            highlightText: "terrwerwe0",
            contant1: "Test0 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              // {
              //   q:
              //   {
              //     id: "question-1",
              //     contant: "Test1 Contant",
              //     contentLabel: "Test1",
              //     // highlightText:"terrwerwe1",
              //     // dataTip:"fsdfsdf1"
              //   }

              // }
              // ,
              // {
              //   q:
              //   {
              //     id: "question-2",
              //     contant: "Test2 Contant2",
              //     contentLabel: "Test1222",
              //     highlightText: "terrwerwe1222",
              //     dataTip: "fsdfsdf122222"
              //   }

              // }



            ]
          }
          ,

          {
            id: "tab-2",
            contentLabel: "Test02",
            highlightText: "terrwerwe0",
            contant1: "Test0 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              // {
              //   q:
              //   {
              //     id: "question-3",
              //     contant: "Test1 Contant",
              //     contentLabel: "Test1444",
              //     // highlightText:"terrwerwe1",
              //     // dataTip:"fsdfsdf1"
              //   }

              // }
              // ,
              // {
              //   q:
              //   {
              //     id: "question-4",
              //     contant: "Test2 Contant2",
              //     contentLabel: "Test555555",
              //     highlightText: "terrwerwe1222",
              //     dataTip: "fsdfsdf122222"
              //   }

              // }



            ]
          }






        );



      }

      /////////////end of 2///////////////////////



      ////////////////////////////3////////////////////////////////
      else if (this.branchingNumber == 3) {
        this.branchingArr.length = 0;
        this.branchingArr.push(
          {
            id: "tab-1",
            contentLabel: "Test01",
            highlightText: "terrwerwe0",
            contant1: "Test0 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              // {
              //   q:
              //   {
              //     id: "question-1",
              //     contant: "Test1 Contant",
              //     contentLabel: "Test1",
              //     // highlightText:"terrwerwe1",
              //     // dataTip:"fsdfsdf1"
              //   }

              // }
              // ,
              // {
              //   q:
              //   {
              //     id: "question-2",
              //     contant: "Test2 Contant2",
              //     contentLabel: "Test1222",
              //     highlightText: "terrwerwe1222",
              //     dataTip: "fsdfsdf122222"
              //   }

              // }



            ]
          }
          ,

          {
            id: "tab-2",
            contentLabel: "Test02",
            highlightText: "terrwerwe0",
            contant1: "Test0 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              {
                q:
                {
                  id: "question-3",
                  contant: "Test1 Contant",
                  contentLabel: "Test1444",
                  // highlightText:"terrwerwe1",
                  // dataTip:"fsdfsdf1"
                }

              }
              ,
              {
                q:
                {
                  id: "question-4",
                  contant: "Test2 Contant2",
                  contentLabel: "Test555555",
                  highlightText: "terrwerwe1222",
                  dataTip: "fsdfsdf122222"
                }

              }



            ]
          }
          ,
          {
            id: "tab-3",
            contentLabel: "Test3",
            highlightText: "terrwerwe0",
            contant1: "Test3 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              {
                q:
                {
                  id: "question-5",
                  contant: "Test1 Contant",
                  contentLabel: "Test1",
                  // highlightText:"terrwerwe1",
                  // dataTip:"fsdfsdf1"
                }

              }
              ,
              {
                q:
                {
                  id: "question-6",
                  contant: "Test2 Contant2",
                  contentLabel: "Test1222",
                  highlightText: "terrwerwe1222",
                  dataTip: "fsdfsdf122222"
                }

              }



            ]
          }





        );



      }

      /////////////end of 3///////////////////////


      ////////////////////////////4////////////////////////////////
      else if (this.branchingNumber == 4) {
        this.branchingArr.length = 0;
        this.branchingArr.push(
          {
            id: "tab-1",
            contentLabel: "Test01",
            highlightText: "terrwerwe0",
            contant1: "Test0 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              // {
              //   q:
              //   {
              //     id: "question-1",
              //     contant: "Test1 Contant",
              //     contentLabel: "Test1",
              //     // highlightText:"terrwerwe1",
              //     // dataTip:"fsdfsdf1"
              //   }

              // }
              // ,
              // {
              //   q:
              //   {
              //     id: "question-2",
              //     contant: "Test2 Contant2",
              //     contentLabel: "Test1222",
              //     highlightText: "terrwerwe1222",
              //     dataTip: "fsdfsdf122222"
              //   }

              // }



            ]
          }
          ,

          {
            id: "tab-2",
            contentLabel: "Test02",
            highlightText: "terrwerwe0",
            contant1: "Test0 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              {
                q:
                {
                  id: "question-3",
                  contant: "Test1 Contant",
                  contentLabel: "Test1444",
                  // highlightText:"terrwerwe1",
                  // dataTip:"fsdfsdf1"
                }

              }
              ,
              {
                q:
                {
                  id: "question-4",
                  contant: "Test2 Contant2",
                  contentLabel: "Test555555",
                  highlightText: "terrwerwe1222",
                  dataTip: "fsdfsdf122222"
                }

              }



            ]
          }
          ,
          {
            id: "tab-3",
            contentLabel: "Test3",
            highlightText: "terrwerwe0",
            contant1: "Test3 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              {
                q:
                {
                  id: "question-5",
                  contant: "Test1 Contant",
                  contentLabel: "Test1",
                  // highlightText:"terrwerwe1",
                  // dataTip:"fsdfsdf1"
                }

              }
              ,
              {
                q:
                {
                  id: "question-6",
                  contant: "Test2 Contant2",
                  contentLabel: "Test1222",
                  highlightText: "terrwerwe1222",
                  dataTip: "fsdfsdf122222"
                }

              }



            ]
          }


          ,
          {
            id: "tab-4",
            contentLabel: "Test4",
            highlightText: "terrwerwe04",
            contant1: "Test4 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              {
                q:
                {
                  id: "question-7",
                  contant: "Test7 Contant",
                  contentLabel: "Test7",
                  // highlightText:"terrwerwe1",
                  // dataTip:"fsdfsdf1"
                }

              }
              ,
              {
                q:
                {
                  id: "question-8",
                  contant: "Test8 Contant2",
                  contentLabel: "Test8",
                  highlightText: "terrwerwe1222",
                  dataTip: "fsdfsdf122222"
                }

              }



            ]
          }




        );



      }

      /////////////end of 4///////////////////////













































    } else {

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

          item.questions.map((item2, index) => {
            console.log(index)
            qs0.push(item2)
            console.log(qs0.length);

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
      <div class="wrapper">

        {this.branchingArr.map((item, index) =>
          <div class="wrap-3">
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
                        <span class="tip" data-tip={item.dataTip}>
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
                      <div class="question-wrap">
                        <input type="radio" id={i.q.id} name="question"></input>
                        <label htmlFor={i.q.id}><div>{i.q.contentLabel}</div> <div class="cross"></div></label>

                        <div class="content">
                          {i.q.highlightText != null ?
                            <span class="tip" data-tip={item.dataTip}>
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
                        <span class="tip" data-tip={item.dataTip}>
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
                            <span class="tip" data-tip={item.dataTip}>
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
                        <span class="tip" data-tip={item.dataTip}>
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
                            <span class="tip" data-tip={item.dataTip}>
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
                        <span class="tip" data-tip={item.dataTip}>
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
                            <span class="tip" data-tip={item.dataTip}>
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
