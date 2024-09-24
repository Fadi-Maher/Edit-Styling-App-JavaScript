function ChangeFont() {
   
    var paragraph = document.getElementById('PAR');
    var selectedFontFamily = document.querySelector('input[name="Font"]:checked').value;
    paragraph.style.fontFamily = selectedFontFamily;
}


function ChangeAlign() {
      var paragraph = document.getElementById('PAR');
       var selectedAlignment = document.querySelector('input[name="Align"]:checked').value;
       paragraph.style.textAlign = selectedAlignment
}

function ChangeHeight() {
      var paragraph = document.getElementById('PAR');
       var selectedHeight = document.querySelector('input[name="Height"]:checked').value;
       paragraph.style.lineHeight = selectedHeight
}


function ChangeLSpace() {
      var paragraph = document.getElementById('PAR');
       var selectedSpacing = document.querySelector('input[name="Lspace"]:checked').value;
       paragraph.style.letterSpacing = selectedSpacing
}

function ChangeIndent() {
      var paragraph = document.getElementById('PAR');
       var selectedIndent = document.querySelector('input[name="Indent"]:checked').value;
       paragraph.style.textIndent = selectedIndent
}

function ChangeTransform() {
      var paragraph = document.getElementById('PAR');
       var selectedTrans = document.querySelector('input[name="Transform"]:checked').value;
       paragraph.style.textTransform = selectedTrans
}



function ChangeDecorate() {
      var paragraph = document.getElementById('PAR');
       var selecteddec = document.querySelector('input[name="Decorate"]:checked').value;
       paragraph.style.textDecoration = selecteddec
}


function ChangeBorder() {
      var paragraph = document.getElementById('PAR');
       var selectedBorder = document.querySelector('input[name="Border"]:checked').value;
       paragraph.style.border = selectedBorder
}



function ChangeBorderColor() {
      var paragraph = document.getElementById('PAR');
       var selectedBorderColor = document.querySelector('input[name="BorderColor"]:checked').value;
       paragraph.style.borderColor = selectedBorderColor
}