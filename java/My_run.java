import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.misc.Interval;
import org.antlr.v4.runtime.tree.*; 

import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
//import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.*;

// import for file reader
import java.io.FileReader;
import java.io.IOException;



public class My_run {

    public static void main (String args[]) throws IOException {
    
    String oracle = "";
    try (// pass the path to the file as a parameter 
        FileReader fr = new FileReader("/var/www/html/secteal-string.txt")) {
            int i; 
            while ((i=fr.read()) != -1)  {
                oracle += (char) i;
                }
	} 
	
	/*
	String oracle = "((tx(0).type = int close) and (((tx(0).fv > int 3000) and (tx(0).crcv = addr A)) or (((arg(0) = byte base64 0) and (verisig(arg(0),arg(1),addr O) and (tx(0).crcv = addr A))) or ((arg(0) = byte base64 1) and (verisig(arg(0),arg(1),addr O) and (tx(0).crcv = addr B))))))";
    */

	String basic = "txlen";
	

	stealLexer lexer = new stealLexer(CharStreams.fromString(oracle));
	//stealLexer lexer = new stealLexer(CharStreams.fromString(basic));
	CommonTokenStream tokens = new CommonTokenStream(lexer);
	stealParser parser = new stealParser(tokens);

	ParserRuleContext tree = parser.exp_noc();
	// was: ParserRuleContext <Token> tree = parser.exp();

	// create standard walker
	ParseTreeWalker walker = new ParseTreeWalker();
	ABB__stealBaseListener extractor = new ABB__stealBaseListener();//(parser);
	walker.walk(extractor, tree);// initiate walk of tree with listener

    }
}
