// Console SCRIPT version 2.5
//
// 

   
    
    //Hint code
    CodeMirror.commands.autocomplete = function(cm) {
        CodeMirror.showHint(cm, CodeMirror.javascriptHint);
    };
    

    /*Testing button*/
    function test() {
        if (editor.getOption("mode") === "coffeescript")
            alert("coffeescript");
        if (editor.getOption("mode") === "javascript")
            alert("javascript");
    }

  function cl() {
  //    editor=cm.toTextArea();
  var a="\n\
"
  var codeeliminate = editor.getValue();
  alert("The Code that will be deleted is :  "+codeeliminate);
     //alert(editornull.getValue());
   editor.setValue("   // Write Here"+a+a+a+"  ")
   }
function cl_alert(){
   var a="\n\
"
  
   editor.setValue("   // Write Here"+a+a+a+"  ")
    
}
    function coffeeMode() {
        jsb.style.display = "inline";
        csb.style.display = "none";
        editor.setOption("mode", "coffeescript");
        var label = document.getElementById("label-console");
      label.innerHTML = editor.getOption("mode")
        CodeMirror.autoLoadMode(editor, "coffeescript");
    }

    function javascriptMode() {
        csb.style.display = "inline";
        jsb.style.display = "none";
        var label = document.getElementById("label-console");
        editor.setOption("mode", "javascript");
        label.innerHTML = editor.getOption("mode")
        CodeMirror.autoLoadMode(editor, "javascript");
    }
    
  
    
function exec() {
var a="\n\
";
        var code = editor.getValue();
        var codex=editor.getValue();   
        
              if(editor.getOption("mode") === "coffeescript") {
              try{
                  codex=codex.replace("###", "");
                codex="###"+a+codex+a+"###";
                var js = CoffeeScript.compile(code);
                  
               var f = new Function(js);
               f();
               cl_alert();
               editor.setValue(codex);
            }
              catch(err)
  {
  txt="There was an error on this page.\n";
  txt+="Error description:   " + err.message + "\n";
  txt+="Click OK to continue.\n\n";
  alert(txt);
  }
               
            } else if(editor.getOption("mode") === "javascript") {
              try{ 
                  codex=codex.replace("/*", "");
                  codex=codex.replace("*/", "");
                   codex="/*"+a+codex+a+"*/";
                  var f = new Function(code);
               f();
               cl_alert();
               editor.setValue(""+codex);
           }
           catch(err)
  {
  txt="There was an error on this page.\n";
  txt+="Error description:   " + err.message + "\n";
  txt+="Click OK to continue.\n\n";
  alert(txt);
  }
            }
           // cl();
            
        }


function displayResult()
{
document.getElementById("consl").style.top="100px";
}
 function toggleConsole() {
        var el = document.getElementById("consl");
        var body = document.getElementById("webindex");
        var btn = document.getElementById("showConsole");
        var dicom  = document.getElementById("webdicom")


        if(body !== null && document.getElementById("console-index").style.position == 'fixed'){
        document.getElementById("console-index").style.position = 'relative';
      }
      if (dicom !== null && document.getElementsByTagName("footer")[0].style.position == 'fixed')
        {
       document.getElementsByTagName("footer")[0].style.position = 'relative';
      }

        if (el.style.display !== 'none') {
            if(body !==null){
            document.getElementById("console-index").style.position= 'fixed';
        }
             if(dicom !==null){
           document.getElementsByTagName("footer")[0].style.position = 'fixed';
        }
            el.style.display = 'none';
            var label = document.getElementById("label-console");
            label.innerHTML = "";
            editor.refresh();
            btn.setAttribute("value","OpenConsole");


        }
        else {
            el.style.display = 'inline';
            el.style.float = 'left'
            editor.refresh();
             var label = document.getElementById("label-console");
            label.innerHTML = editor.getOption("mode");
            btn.setAttribute("value","CloseConsole");
        }

    }

    function toggleConsolehome() {

        var el = document.getElementById("consl")
        var body = document.getElementById("webindex")
        var  tab=document.getElementById("tab")
       



        // btn.value='OpenConsole';
        if(tab.style.display=='none'){
        tab.style.display='inline';
        var label = document.getElementById("label-console");
        label.innerHTML = editor.getOption("mode");
      }
       
        if(body !== null && document.body.style.overflow == 'hidden'){
        document.body.style.overflow = 'auto';}

        if (el.style.display !== 'none') {
            if(body !==null){
            document.getElementById("webindex").style.overflow = 'hidden';
        }
            el.style.display = 'none';
            var label = document.getElementById("label-console");
            label.innerHTML = ""
            editor.refresh();

        }
        else {
            el.style.display = 'inline';
            tab.style.display = 'none';
            el.style.float = 'left'

             el.style.position = "absolute";
         var label = document.getElementById("label-console");
        label.innerHTML = editor.getOption("mode");
            // btn.style.position="absolute";
            // btn.value='OpenConsole2212';
            editor.refresh();
        }

    }


    
    /*keys for opening the console
     * for combo or other key:
     * ctrl -> ctrlKey
     * alt -> altrKey
     * c -> 67
     * shift -> 16*/
    document.onkeyup = function(e) {
        if (e.keyCode === 220) {
            toggleConsolehome();
        }
    };
   
    
    /*Access projects page*/
    
    function webdicom() {
        window.location.href = "Web-dicom.html";
    };
    
    function webindex() {
         window.location.href = "Web-index.html";
    };
    
    function weblar() {
        window.location.href = "Web-lar.html";
    };

