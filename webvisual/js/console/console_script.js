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
            alert("coffee");
        if (editor.getOption("mode") === "javascript")
            alert("java");
    }

    function coffeeMode() {
        jsb.style.display = "inline";
        csb.style.display = "none";
        editor.setOption("mode", "coffeescript");
        CodeMirror.autoLoadMode(editor, "coffeescript");
    }

    function javascriptMode() {
        csb.style.display = "inline";
        jsb.style.display = "none";
        editor.setOption("mode", "javascript");
        CodeMirror.autoLoadMode(editor, "javascript");
    }
    
    /*Execute the code*/
    function exec() {

        var js = editor.getValue();//http://codemirror.net/doc/manual.html#getValue
        var s = document.createElement('script');
        s.textContent = js;
        document.body.appendChild(s);
    }

    function toggleConsole() {
        var el = document.getElementById("consl");

        if (el.style.display !== 'none') {
            el.style.display = 'none';
            editor.refresh();
        }
        else {
            el.style.display = 'inline';
            el.style.float = 'left'
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
            toggleConsole();
        }
    };
    
    
    /*Access projects page*/
    
    function webdicom() {
             var a = document.getElementById("dicom");
        var href = a.href;
        window.open(href);
    };
    
    function webindex() {
        var a = document.getElementById("index");
        var href = a.href;
        window.open(href);
    };
    
    function weblar() {
            var a = document.getElementById("lar");
        var href = a.href;
        window.open(href);
    };
