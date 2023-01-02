document.write("<script>");
 
document.write("var OriginTitle = document.title;");
 
document.write("var titleTime;");
 
document.write("document.addEventListener('visibilitychange', function () {");
 
document.write("if (document.hidden) {");
 
document.write("document.title = '你别走吖 Σ(っ °Д °;)っ';");
 
document.write("clearTimeout(titleTime);");
 
document.write("}");
 
document.write("else {");
 
document.write("document.title = '你可算回来了 (｡•ˇ‸ˇ•｡)';");
 
document.write("titleTime = setTimeout(function () {");
 
document.write("document.title = OriginTitle;");
 
document.write("}, 2000);");
 
document.write("");
 
document.write("});");
 
document.write("<\/script>