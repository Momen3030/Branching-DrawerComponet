import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'branching-drawer',
  styleUrl: 'branching-drawer.css',
  shadow: true,
})

export class BranchingDrawer {
  @Prop() branchingNumber:number;
  branchingArr:any[]=[
    {
      id:"tab-1",
      contentLabel:"Test0",
      highlightText:"terrwerwe0",
      contant:"Test0 Contant",
      dataTip:"fsdfsdf0",
      qn:4,
      questions:[
    {
      q1:
      {id:"question-1",
      contant:"Test1 Contant",
      contentLabel:"Test1",
      highlightText:"terrwerwe1",
      dataTip:"fsdfsdf1"
      }
    }
    ,
    {
        q2:
        {id:"question-2",
        contant:"Test2 Contant",
        contentLabel:"Test2",
        highlightText:"terrwerwe2",
        dataTip:"fsdfsdf2"
        }
    }  
    
    
    
    
    
    ],

    }
  ];

constructor(){

}

  render() {
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



    <div class="wrap-3">
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
    </div>




    <div class="wrap-3">
      <input type="radio" id="tab-8" name="tabs"></input>
      <label htmlFor="tab-8"><div>العنوان الرابع</div><div class="cross"></div></label>
      <div class="questions">
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
      </div>
    </div>










        </div>
    );
  }

}
