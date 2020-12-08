// Web Scraping Project
// Scrapping Data of all Asia Pacific Branches of Goldman Sachs

let req=require("request");
let ch=require("cheerio");
let fs=require("fs");
req("https://www.goldmansachs.com/our-firm/locations.html",answerOFurl);
function answerOFurl(err,res,html)
{   
    let sTool=ch.load(html);
    let BranchArr=sTool("ul.listings.filter"); //extract branches from list
    let fullhtml="<ul>";
    
    for(let i=0;i<11;i++) //there are 11 asia_pacific branch
    {    let allData=sTool(BranchArr[i]).find(li.class.filter_asiapacific) //list items with li class= asiapacific
         fullhtml+=sTool(allData).html();
    }
        fullhtml+="</ul>"
    
    fs.writeFileSync("GOLDMAN-SACHS-branches.html",fullhtml);
    console.log("Files Saved Successfully!");
}
