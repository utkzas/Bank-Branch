// Web Scraping Project
// Scrapping Data of all Asia Pacific Branches of Goldman Sachs

let req=require("request");
let ch=require("cheerio");
let fs=require("fs");
req("https://www.goldmansachs.com/our-firm/locations.html",answerOFurl);
function answerOFurl(err,res,html)
{   
    let sTool=ch.load(html);
    let BranchArr=sTool("ul.listings.filter"); 
    let fullhtml="<ul>";
    
    for(let i=0;i<1;i++) h
    {    let allData=sTool(BranchArr); 
         fullhtml+=sTool(allData).html();
    }
        fullhtml+="</ul>" //unordered list
    
    fs.writeFileSync("GOLDMAN-SACHS-branches.html",fullhtml);
    console.log("Files Saved Successfully!");
}
