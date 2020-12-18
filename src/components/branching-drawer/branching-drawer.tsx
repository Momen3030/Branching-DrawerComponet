import { Component, h, Prop } from '@stencil/core';

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




     else if (this.branchingNumber == 2) {
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
          },

          {
            id: "tab-2",
            contentLabel: "Test01",
            highlightText: "terrwerwe0",
            contant1: "Test0 Contant",
            dataTip: "fsdfsdf0",
            questions: [
              {
                q:
                {
                  id: "question-3",
                  contant: "Test2 Contant2",
                  contentLabel: "Test2",
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
                  contentLabel: "Test222323232",
                  highlightText: "terrwerwe1222",
                  dataTip: "fsdfsdf122222"
                }

              }



            ]
          }
          
          
          
          
          
          );
      }








    }else{

    }
  }

  render() {
    var content2 = [];
    var qs = [];
    this.branchingArr.map((item) => {
      // console.log(item.contant1);
      if (item.questions.length == 0) {
        content2.push(
          <div class="content">
            {item.contant1}
            {item.highlightText != null ?
              <span class="tip" data-tip={item.dataTip}>
                {item.highlightText}
              </span>
              : ''}

          </div>
        )
      }
      else {

        {
          item.questions.map(item2 =>
            // console.log(item2.q.id)
            // console.log(item2.q.id);
            qs.push(
              
                <div class="question-wrap">
                  <input type="radio" id={item2.q.id} name="question"></input>
                  <label htmlFor={item2.q.id}><div>{item2.q.contentLabel}</div> <div class="cross"></div></label>
                  <div class="content">
                    {item2.q.highlightText != null ?
                      <span class="tip" data-tip={item.dataTip}>
                        {item2.q.highlightText}
                      </span>
                      : ''}
                    {item2.q.contant}

                  </div>

                </div>
            


            )


          )
        }



      }


    });
    return (
      <div class="wrapper">
        {/* <div class="wrap-1">
      <input type="radio" id="tab-1" name="tabs"></input>
      <label htmlFor="tab-1"><div>العنوان الأول</div><div class="cross"></div></label>
      <div class="content">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</div>
    </div> */}
        {/*   
    <div class="wrap-2">
      <input type="radio" id="tab-2" name="tabs"></input>
      <label htmlFor="tab-2"><div>العنوان الثاني</div><div class="cross"></div></label>
      <div class="content">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
        <span class="tip" data-tip=" توضيح لمعنى الكلمة الغريبة"> 
          كلمة غريبة تحتاج إلى تفسير
        </span>
      </div>
       
    </div> */}



        {/* <div class="wrap-3">
      <input type="radio" id="tab-3" name="tabs"></input>
      <label htmlFor="tab-3"><div>العنوان الثالث</div><div class="cross"></div></label>
      <div class="questions">
        <div class="question-wrap">
          <input type="radio" id="question-1" name="question"></input>
          <label htmlFor="question-1"><div>عنوان أول متشعب من الثالث</div> <div class="cross"></div></label>
          <div class="content">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</div>
  
        </div>
        <div class="question-wrap">
          <input type="radio" id="question-2" name="question"></input>
          <label htmlFor="question-2"><div>عنوان ثاني متشعب من الثالث</div> <div class="cross"></div></label>
          <div class="content">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</div>
  
        </div>
      </div>
    </div> */}


        {this.branchingArr.map((item) =>
          <div class="wrap-3">
            <input type="radio" id={item.id} name="tabs"></input>
            <label htmlFor={item.id}><div> {item.contentLabel}</div><div class="cross"></div></label>
            {content2 ? (content2.map(i2 => i2)) : ''}
            <div class="questions">
            {qs ? (qs.map(i => i)) : ''}
            </div>
            {/* <div class="questions">
        <div class="question-wrap">
          <input type="radio" id="question-9" name="question"></input>
          <label htmlFor="question-9"><div> تشعب آخر</div> <div class="cross"></div></label>
          <div class="content">
          <span class="tip" data-tip={ <text>توضيح لمعنى الكلمة الغريبة</text>}> 
          كلمة غريبة تحتاج إلى تفسير
        </span>
            
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</div>
           
        </div>
        <div class="question-wrap">
          <input type="radio" id="question-" name="question"></input>
          <label htmlFor="question-4"><div>تشعب آخر </div> <div class="cross"></div></label>
          <div class="content">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</div>
  
        </div>
      </div> */}
          </div>





        )}


        {/* <div class="wrap-3">
      <input type="radio" id="tab-4" name="tabs"></input>
      <label htmlFor="tab-4"><div>العنوان الرابع</div><div class="cross"></div></label>
      <div class="questions">
        <div class="question-wrap">
          <input type="radio" id="question-3" name="question"></input>
          <label htmlFor="question-3"><div> تشعب آخر</div> <div class="cross"></div></label>
          <div class="content">
          <span class="tip" data-tip={ <text>توضيح لمعنى الكلمة الغريبة</text>}> 
          كلمة غريبة تحتاج إلى تفسير
        </span>
            
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</div>
           
        </div>
        <div class="question-wrap">
          <input type="radio" id="question-4" name="question"></input>
          <label htmlFor="question-4"><div>تشعب آخر </div> <div class="cross"></div></label>
          <div class="content">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</div>
  
        </div>
      </div>
    </div> */}










      </div>
    );
  }

}
