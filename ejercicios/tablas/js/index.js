for (i=11;i>8;i--) {
    document.write("<br><b><u>Tabla del "+i+": </u></b><br>")
    for(j=1;j<11;j++) {        
        document.write(i+"x"+j+": ")
        document.write(i*j+"<br>")        
    }
    document.write('<br>')
}