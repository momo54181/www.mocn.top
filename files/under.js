document.write("    <div class=\"foot\">");
document.write("        <div class=\"copyright\">");


document.write("<p>小破站已运行：<span class=\"brand\" id=\"runtime\"><\/span><\/p>		");
document.write("<script type=\"text\/javascript\">");
document.write("	function show_runtime(){");
document.write("		window.setTimeout(\"show_runtime()\",1000);");
document.write("		X=new Date(\"04\/30\/2021 00:00:00\");");
document.write("		Y=new Date();");
document.write("		T=(Y.getTime()-X.getTime());");
document.write("		M=24*60*60*1000;");
document.write("		a=T\/M;");
document.write("		A=Math.floor(a);");
document.write("		b=(a-A)*24;");
document.write("		B=Math.floor(b);");
document.write("		c=(b-B)*60;");
document.write("		C=Math.floor((b-B)*60);");
document.write("		D=Math.floor((c-C)*60);");
document.write("		runtime.innerHTML=A+\"天\"+B+\"小时\"+C+\"分\"+D+\"秒\"");
document.write("	}show_runtime();");
document.write("<\/script>");
