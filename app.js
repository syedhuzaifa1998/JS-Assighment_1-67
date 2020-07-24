
/*==============Chap 1============== */

       /*
       
       Ex-1

        alert("Assalam o alaikum !!\nWelcome to Online Shopping Hub"); 
        
        
        */
        
       /* 

       Ex-2

       alert("Error!Please enter a valid password");

       */
       
       /*

       Ex-3

       alert("Welcome to JS land...\nHappy coding!");
       
       */
        

      /*
      
      Ex-4
      
      alert("Welcome to JS Land...");
      alert("Happy Coding!");

      */

      /*
      
      Ex-5
      
      alert("Hello...I can run JS through my web browser's console");

      */

      
      /*
      
      Ex-6
      
      */



      /*
      
      Ex-7
      
      */



/*==============Chap 2============== */

  /*
        
        Ex-1
        var username;
        
        */


        /*
        
        Ex-2

        myName="Syed huzaifa";
        alert(myName);
        
        */
        

        /*
        
        Ex-3

        var message;
        message="Hello World";
        alert(message);
        
        */


        /*

        Ex-4

        var name="Syed Huzaifa";
        var age="22";
        var email="syedhuzaifa9090@gmail.com";

        alert("My name is "+name);
        alert("My age is "+age);
        alert("Email:"+email);

        */


        /*
        
        Ex-5
        
        */  


        /*
        
        Ex-6
        
        var email="syedhuzaifa9090@gmail.com";

        alert("My email address is "+email);

        */


        /*
        
        Ex-7
        
        var book="A smarter way to learn JavaScript";
        alert("I am trying to learn from a book "+book);

        */


        /*
        
        Ex-8

        document.write("Yah! i can write HTML content through JavaScript");
        
        */


        /*
        
        Ex-9
        
        */


/*==============Chap 3============== */

     /*
       
       Ex-1
 
       var age;
       age=22;
       alert("I am "+age+" years old");

       */ 


        /*
        
        Ex-2
        
        */


        /*
        
        Ex-3
        
        var birthyear=1998;
        alert("My birth year is "+birthyear);

        */


        /*
        
        Ex-4

        var temp=0;
        alert("Welcome Clothing Store..!!");

        while(temp==0)
        {
            var name=prompt("Enter your name","");
            if(name!="")
            temp++;
            else
            alert("Emty entry!!!");
        }
        temp=0;

        while(temp==0)
        {
            var product=prompt("Enter Product name to order","");
            if(product!="")
            temp++;
            else
            alert("Emty entry!!!");
        }
        temp=0;

        while(temp==0)
        {
            var Quantity=prompt("Enter quantity","");
            if(Quantity!="")
            temp++;
            else
            alert("Emty entry!!!");
        }

        document.write(name+" ordered "+Quantity+" "+product+" from XYZ Clothing Store.");

        */


/*==============Chap 4============== */

    /*
        
        Ex-1
        
        var name,age,phone;

        */



        /*
        
        Ex-2

        var 360_hotel;
        var my hotel;
        var %length;
        var #age;
        var alert;

        var hotel_360;
        var my_hotel;
        var length1;
        var _age;
        var alert1;
        
        */


      
        /*

        Ex-3

        document.write("A heading stating 'Rules for naming JS variables'");
        document.write("<br>"+"Variable name can only contain ,numbers,$ and _.For example:$my_1stVariable");
        document.write("<br>"+"Variable must begin with a letter , $ or _ .For example:$name, _name or name");
        document.write("<br>"+"Variable names are case sensitive");
        document.write("<br>"+"Variable names should not be JS keyword");

        */


/*==============Chap 5============== */

        /*
        
        Ex-1
        
        var temp=0;
        while(temp==0)
        {
            var num1=parseInt(prompt("Enter 1st number ",""));
            if(num1!=0)
            temp++;
            else
            alert("Empty entry..!!");

        }
        temp=0;
        while(temp==0)
        {
            var num2=parseInt(prompt("Enter 1st number ",""));
            if(num2!=0)
            temp++;
            else
            alert("Empty entry..!!");

        }
        var num3=num1 + num2;
        document.write("Sum of "+num1+" and "+num2+" is "+num3);

        */

        

        /*
        
        Ex-2
        
        var temp=0;
        while(temp==0)
        {
            var num1=parseInt(prompt("Enter 1st number ",""));
            if(num1!=0)
            temp++;
            else
            alert("Empty entry..!!");

        }
        temp=0;
        while(temp==0)
        {
            var num2=parseInt(prompt("Enter 2nd number ",""));
            if(num2!=0)
            temp++;
            else
            alert("Empty entry..!!");

        }

        var check=parseInt(prompt("Press 1 for Subtraction, 2 for Multiplication , 3 for Division , 4 for Modulus"));
        if(check==1)
        {
        var num3=num1 - num2;
        document.write("Subtraction of "+num1+" and "+num2+" is "+num3);
        }
        if(check==2)
        {
        var num3=num1 * num2;
        document.write("Multiplication of "+num1+" and "+num2+" is "+num3);
        }
        if(check==3)
        {
        var num3=num1 / num2;
        document.write("Division of "+num1+" and "+num2+" is "+num3);
        }
        if(check==4)
        {
        var num3=num1 % num2;
        document.write("Modulus of "+num1+" and "+num2+" is "+num3);
        }

        */




        /*
        
        Ex-3
        
        
        var v1;
        document.write("Value after variable declaration is: "+v1+"<br>");
        v1=27;
        document.write("Initial value: "+v1+"<br>");
        v1++;
        document.write("Value after increment is: "+v1+"<br>");
        document.write("Value after addition is: "+(v1+7)+"<br>");
        v1--;
        document.write("Value after decrement is: "+v1+"<br>");
        document.write("The reminder is: "+(v1%3)+"<br>");

        */

        

        /*
        
        Ex-4
        
        */

        /*
        
        Ex-5
        
        */

        /*
        
        Ex-6
        
        */

        /*
        
        Ex-7
        
        */

        /*
        
        Ex-8
        
        */

        /*
        
        Ex-9
        
        */

        /*
        
        Ex-10
        
        */

        /*
        
        Ex-11
        
        */

        /*
        
        Ex-12
        
        */

        /*
        
        Ex-13
        
        */


/*==============Chap 6-9============== */

/*Task-1 */
var a;

document.write("Results"+"<br>");
a=10;
document.write("The value of a is:"+a);
document.write("<br>");
document.write("..............................");


document.write("<br>");
document.write("The value of ++a is:"+(++a));
document.write("<br>");
document.write("Now the value of a is:"+a);
document.write("<br>");


document.write("The value of a++ is:"+(a++));
document.write("<br>");
document.write("Now the value of a is:"+a);
document.write("<br>");



document.write("The value of --a is:"+(--a));
document.write("<br>");
document.write("Now the value of a is:"+a);
document.write("<br>");


document.write("The value of a-- is:"+(a--));
document.write("<br>");
document.write("Now the value of a is:"+a);







/*==============Chap 9-11============== */
/*==============Chap 12-13============== */
/*==============Chap 14-16============== */
   /*
        Ex-1

        var arr_stu_name=[];
        */


        /*
        Ex-3

        var arr1=["Faaiz","Talha","Huzaifa","Natesh"]
        alert(arr1);
        */


        /*
        Ex-4

        var arr_number=[23,12,34,27];
        */


        /*
        Ex-5

        var arr_boolean=[true,false];
        */


        /*
        Ex-6

        var arr_mixed=["Huzaifa",27,98,"Syed",89];
        */



        /*
        Ex-7

       var arr1=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Ph.d"];
        document.write("Qualifications:"+"<br>");
        
        for(var a=0;a<arr1.length;a++)
        {
            document.writeln((1+a)+")"+arr1[a]);
            document.write("<br>");
           
        }
        */ 


        /*
        Ex-8

        var sname=["Faaiz Shaikh","Talha Kaimkhani","Syed Huzaifa"];
        var smarks=[398,430,390];
        var total=500;

        for(var a=0;a<sname.length;a++)
        {
            var per=(smarks[a]/total)*100;
            document.write("Score of "+sname[a]+" is "+smarks[a]+".Percentage:"+per+"%"+"<br>");
        }
        */



       
        /*
        Ex-9
        */

        /*
        var org_arr=["Green","Purple","Orange","Grey","Pink"];
        document.write("Original Colour Array: ");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]);
        }
        */


        /*

        Update-a

        */
        
        /*
        var upd_a = prompt("What color you wants to add to the beginning", "<name goes here>");
        
        org_arr.unshift(upd_a);
        if(upd_a!=null)
        {
            document.write("<br>"+"<br>"+"Colour Array with Update_a:(New element added at start)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]);
            
        }
        }
        */



         /*
        
        Update-b

        */

        /*
        var upd_b = prompt("What color you wants to add to the end", "<name goes here>");
        
        org_arr.push(upd_b);
        if(upd_b!=null)
        {
            document.write("<br>"+"<br>"+"Colour Array with Update_b:(New element added at end)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]);
        }
        }
        */


               
           /*
        
        Update-c

        */

        /*
        var upd_c_a = prompt("Add another colour at beginning", "<name goes here>");
        var upd_c_b = prompt("Add another colour at beginning", "<name goes here>");
        org_arr.unshift(upd_c_a);
        org_arr.unshift(upd_c_b);
        if(upd_c_a!=null&&upd_c_b!=null)
        {
            document.write("<br>"+"<br>"+"Colour Array with Update_c:(Two new elements added at start)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]);
            
        }
        }
        */


           /*
        
        Update-d

        */

        /*
        org_arr.shift();
        document.write("<br>"+"<br>"+"Colour Array with Update_d:(First element deleted!)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]);
            
        }
        */



         /*
        
        Update-e

        */

        /*
        org_arr.pop();
        document.write("<br>"+"<br>"+"Colour Array with Update_e:(Last element is deleted!)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]); 
        }
        */


        /*
        
        Update-f

        */

        /*
        var upd_f_a=prompt("Enter index where you want to enter element","enter here");
        var upd_f_b=prompt("Enter element want to enter","enter here");
        org_arr.splice(upd_f_a,0,upd_f_b);
        document.write("<br>"+"<br>"+"Colour Array with Update_f:(Another element added at specific loc)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]); 
        }
        */


          /*
        
        Update-g

        */

        /*
        var upd_g_a=prompt("Enter index from where you want to delete element'(s)","enter here");
        var upd_g_b=prompt("Enter number of element'(s) want to remove","enter here");
        org_arr.splice(upd_g_a,upd_g_b);
        document.write("<br>"+"<br>"+"Colour Array with Update_g:( Element deleted from specific loc)");
        for(var a=0;a<org_arr.length;a++)
        {
            document.write("<br>"+org_arr[a]); 
        }        

        console.clear;
        */


/*
        Ex-10

        var sscores=[320,230,480,120];
        document.write("Scores of Students :");
        for(var a=0;a<sscores.length;a++)
        {   
            if(a!=sscores.length-1)
            document.write(sscores[a]+",");
            else
            document.write(sscores[a]);
        }

        for(var a=0;a<sscores.length;a++)
        {
            for(var b=a+1;b<sscores.length;b++)
            {
                if(sscores[a]>sscores[b])
                {
                    var temp1=sscores[a];
                    var temp2=sscores[b];

                    sscores[b]=temp1;
                    sscores[a]=temp2;
                }
            }
        }
        document.write("<br>");
        document.write("Ordered Scores of Students :");
        for(var a=0;a<sscores.length;a++)
        {
            if(a!=sscores.length-1)
            document.write(sscores[a]+",");
            else
            document.write(sscores[a]);
        }
        */




        /*
        Ex-11

        var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
        document.write("Cities List:"+"<br>");
        for(var a=0;a<cities.length;a++)
        {
            if(a!=cities.length-1)
            document.write(cities[a]+",");
            else
            document.write(cities[a]);
        }
        var selected_cities=cities.splice(1,3);
        document.write("<br>"+"Selected Cities List:"+"<br>");
        for(var a=0;a<cities.length;a++)
        {
            if(a!=cities.length-1)
            document.write(cities[a]+",");
            else
            document.write(cities[a]);
        }
        */



 /*
        Ex-12

        var arr1=["This","is","my","cat"];
        document.write("Array:"+"<br>");
        for(var a=0;a<arr1.length;a++)
        {
            if(a!=arr1.length-1)
            document.write(arr1[a]+",");
            else
            document.write(arr1[a]);
        }
        document.write("<br>"+"String:"+"<br>");
        var s1=arr1.join(" ");
        document.write(s1);
        */

        
        /*
        var arr1=["A","B","C","D"];
        document.write(arr1+"<br>");
        arr1.pop();
        document.write(arr1+"<br>");
        arr1.push("E");
        document.write(arr1+"<br>");
        arr1.shift();
        document.write(arr1+"<br>");
        arr1.unshift("Y");
        document.write(arr1+"<br>");
        */


        /*

        Ex-13
        
        */

        /*
        var arr1=new Array();
        arr1.unshift("Keyboard");
        arr1.unshift("Mouse");
        arr1.unshift("Printer");
        arr1.unshift("Monitor");
        alert(arr1.pop());
        alert(arr1.pop());
        alert(arr1.pop());
        alert(arr1.pop());
        */

        /*

        Ex-14
        
        */

        /*
        var arr1=new Array();
        arr1.push("Keyboard");
        arr1.push("Mouse");
        arr1.push("Printer");
        arr1.push("Monitor");
        alert(arr1.pop());
        alert(arr1.pop());
        alert(arr1.pop());
        alert(arr1.pop());
        */



/*==============Chap 17-20============== */
    /*

        Ex-1

       var arr1 = [ [],[],];
       arr1=[["Syed Huzaifa",22],["Faaiz Shaikh",22]];

        */



        /*
        
        Ex-2

        var num_arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

        for(var a=0;a<3;a++)
        {
            for(var b=0;b<4;b++)
            {
                document.write(num_arr[a][b]+"&nbsp&nbsp&nbsp");
            }
            document.write("<br>");
        }

        */



        /*
        
        Ex-3

        for(var a=1;a<=10;a++)
        {
            document.write(a+"<br>");
        }

        */




        /*
        
        Ex-4
        
        var num=prompt("Enter a number to show its multiplication table","Enter here...");
        var len1=prompt("Enter length multiplication table","Enter here...");

        document.write("Multiplication table of "+num+" Length "+len1+"<br>");
        for(a=1;a<=len1;a++)
        {
            document.write(num+" "+"x"+" "+a+"="+" "+num*a+"<br>");
        }

        */




        /*
        
        Ex-5
        
        var fruits=["apple","banana","mango","orange","strawberry"];

        for(var a=0;a<fruits.length;a++)
        {
            document.write("Element at index "+a+" is "+fruits[a]+"<br>");
        }

        */
        


        /*
        
        Ex-6
    
        document.write("Counting:");
        for(var a=1;a<=15;a++)
        {   
            if(a!=15)
            document.write(a+",");
            else
            document.write(a);
        }
        
        document.write("<br>"+"Reverse Counting:");
        for(var a=10;a>=1;a--)
        {   
            if(a!=1)
            document.write(a+",");
            else
            document.write(a);
        }
        
        document.write("<br>"+"Even:");
        for(var a=0;a<=20;a=a+2)
        {   
            if(a!=20)
            document.write(a+",");
            else
            document.write(a);
        }
        document.write("<br>"+"Odd:");
        for(var a=1;a<=19;a=a+2)
        {   
            if(a!=19)
            document.write(a+",");
            else
            document.write(a);
        }
        document.write("<br>"+"Series:");
        for(var a=2;a<=20;a=a+2)
        {   
            if(a!=20)
            document.write(a+"k"+",");
            else
            document.write(a+"k");
        }

        */




        /*

        Ex-7        

        var temp=0;
        var bakery=["cake","apple pie","cookie","chips","patties"];
        var check=prompt("Welcome to MyNewBakers....What do you want to order Sir/Mam","Type.....");
        for(var a=0;a<bakery.length;a++)
        {
            if(check.toLowerCase()==bakery[a])
            {
                document.write(bakery[a]+" is "+"available at index "+a+" in our bakery.");
                temp++;
            }
        }
        if(temp==0)
        document.write("We are sorry "+check+" is not available in our bakery.");

        */




        /*
        
        Ex-8

        var num=[24,53,78,91,12];
        var temp=0;
        for(var a=0;a<num.length;a++)
        {
            if(num[a]>temp)
            temp=num[a];
        }
        document.write("Array items :"+num+"<br>");
        document.write("The Largest number is : "+temp);

        */



        /*
        
        Ex-9
        
        var num=[24,53,78,91,12];
        var temp1=0;
        var temp2=0;
        document.write("Array items :"+num+"<br>");
        for(var a=0;a<num.length;a++)
        {
            for(var b=a+1;b<num.length;b++)
            {
                if(num[a]>num[b])
                {
                    var temp1=num[a];
                    var temp2=num[b];

                    num[b]=temp1;
                    num[a]=temp2;
                }
            }
        }
        
        document.write("The Smallest number is : "+num[0]);
        
        */
        


        /*
        
        Ex-10
        
        
        for(var a=5;a<=100;a=a+5)
        {
            if(a!=100)
            document.write(a+",");
            else
            document.write(a);
        }

        */


/*==============Chap 21-25============== */

/*Task-1 */


/*
var first=prompt("Enter first name","Enter here..");
var last=prompt("Enter last name","Enter here..");
var fullname=first+" "+last;
document.write("Welcome "+fullname+"....!!");
*/


/*Task-2 */


/*
var mob=prompt("Enter favourite mobile model","Enter here..");
document.write("My favourite phone is: "+mob+"<br>");
document.write("Length of string:"+mob.length);
*/


/*Task-3 */


/*
var s1="Pakistan";
var l1=s1.length;
document.write("String :"+s1+"<br>");
for(var a=0;a<l1;a++)
{
        if(s1[a]=='n')
        document.write("Index of "+"'n':"+a);

}
*/


/*Task-4 */


/*
var s1="Hello World";
var l1=hw.length;
for(var a=0;a<l1;a++)
{
        if(s1[a]=='l')
        var temp=a;
}
document.write("String :"+s1+"<br>");
document.write("Index of 'l':"+temp);
*/


/*Task-5 */

/*
var s1="Pakistan";
var l1=s1.length;
document.write("String :"+s1+"<br>");
for(var a=0;a<l1;a++)
{
        if(a==3)
        document.write("Character at Index "+a+":"+s1[a]);
}
*/


/*Task-6 */


/*
var first=prompt("Enter first name","");
var last=prompt("Enter last name","");
var full=first.concat(last);

document.write("Welcome "+full);
*/


/*Task-7 */


/*
var city="Hyderabad";
document.write("City :"+city+"<br>");
city="Islamabad";
document.write("After replacement :"+city);
*/


/*Task-8 */

/*
var message="Ali and Sami are best friends.They play cricket and football together";
var count=message.split("and").length-1;
alert(count);
var temp=0;
var res;
while (temp!=count)
{
        res=message.replace("and","&");
        temp++;
}

document.write(res);
*/

/*
var str="The world is The. Because we are The";
document.write(str.split("The").length-1);
*/



/*Task-9 */


/*
var s1="427";
document.write("Value:"+s1+"<br>"+"Type:"+typeof(s1));
var n1=parseInt(s1);
document.write("<br>"+"Value:"+n1+"<br>"+"Type:"+typeof(n1));
*/


/*Task-10 */


/*
var s1="peanuts";
document.write("User input:"+s1+"<br>");
document.write("Uppercase:"+s1.toUpperCase());
*/


/*Task-11 */


/*
function titlecase(string)
{
    document.write("User Input : "+string)
    string = string.toLowerCase().split(" ");
    for(var i = 0; i < string.length;i++)
    {
        string[i] = string[i].charAt(0).toUpperCase()+string[i].slice(1) + " ";
    }
    return string.join(' ')    
}
document.write("<br>Output : "+titlecase("the quick brown fox"))
*/


/*Task-12 */



/*Task-13 */


/*Task-14 */


/*
var arr1=["cake","apple pie","cookie","chips","patties"];
var input=prompt("Search...","Enter here");
var temp=0;

for(var a=0;a<arr1.length;a++)
{

        if(arr1[a].toLowerCase()==input.toLowerCase())
        {
                document.write(arr1[a]+" is available at index "+a+" in our bakery");
                temp++;
        }
}

if(temp==0)
document.write("We are Sorry "+input+" is not available in our bakery");
*/


/*Task-15 */


/*
******
var pass=prompt("Enter password.","Enter here....");
*/


/*Task-16 */


/*Task-17 */


/*
var user=prompt("Enter string","");
var count=user.length;
document.write("Last character of input : "+user[count-1]);
*/


/*Task-18 */


/*
var str="The quick brown fox jumps over the lazy dog";
var str2=str.toLowerCase();
var count=str2.split("the").length-1;
document.write("Text:"+str+"<br>");
document.write("There are "+count+" occurrence(s) of word 'the'");
*/


/*==============Chap 26-30============== */
/*==============Chap 31-34============== */
/*==============Chap 35-38============== */


/*Task-1 */


/*
function tell_date_time()
{
        var g1=new Date();
        var date1=g1.toDateString();
        var hour1=g1.toTimeString();
        document.write(date1+" "+hour1);
}

tell_date_time();
*/



/*Task-2 */



/*
function first_last(f1,l1)
{
        alert("Welcome "+f1+" "+l1);

}
first_last("Syed","Huzaifa");
*/



/*Task-3 */



/*
function add(num1,num2)
{
        document.write("Addition of "+num1+" and "+num2+"="+(parseInt(num1)+parseInt(num2)));

}
var n1=prompt("Enter number ","Enter here....");
var n2=prompt("Enter number ","Enter here....");

add(n1,n2);
*/


/*Task-4 */


/*
var n1=prompt("Enter number","");

if(n1=="")
{
        alert("Error!...empty input");
        n1=prompt("Enter number","");
}

var n2=prompt("Enter number","");

if(n2=="")
{
        
        alert("Error!...empty input");
        n2=prompt("Enter number","");
}

var c=prompt("Enter any character (+,-,x,/)","");

if((c!="+"&&c!="-"&&c!="x"&&c!="/")||c=="")
{
        alert("Error!....enter valid input");
        c=prompt("Enter any character (+,-,x,/)","Enter here...");
}


function calculator(num1,num2,ch)
{
        if(ch=="+")
        document.write(num1+" "+ch+" "+num2+"="+(parseInt(num1)+parseInt(num2)));
        if(ch=="-")
        document.write(num1+" "+ch+" "+num2+"="+(parseInt(num1)-parseInt(num2)));
        if(ch=="*")
        document.write(num1+" "+ch+" "+num2+"="+(parseInt(num1)*parseInt(num2)));
        if(ch=="/")
        document.write(num1+" "+ch+" "+num2+"="+(parseInt(num1)/parseInt(num2)));
}

calculator(n1,n2,c);
*/



/*Task-5 */



/*
function sq(n1)
{
        document.write("Square of number "+n1+":"+parseInt(n1)*parseInt(n1));
}
var num1=prompt("Enter a number for squaring","");
if(num1=="")
{
        alert("Error!....valid entry plzz");
        num1=prompt("Enter a number for squaring","");
}

sq(num1);
*/



/*Task-6 */



/*
function fact(num1)
{
        var temp1=1;
        for(var a=num1;a>=1;a--)
        {
                temp1=a*temp1;
        }
        document.write("Factorial of "+num1+":"+temp1);
}
fact(4);
*/



/*Task-7 */



/*
function start_end(num1,num2)
{
        for(var a=num1;a<=num2;a++)
        {
                document.write(a+" ");
        }
}

var n1=prompt("Enter start number","");
var n2=prompt("Enter end number","");

start_end(parseInt(n1),parseInt(n2));
*/



/*Task-8 */


/*
function calculatehypotenuse()
{
        var b1=prompt("Enter base value","");
        var p1=prompt("Enter perpendicular value","");

       function calculatebase(b1)
       {
                return parseInt(b1)*parseInt(b1);
       }

       function calculateperpendicular(p1)
       {
                return parseInt(p1)*parseInt(p1);
       }

       var h1=Math.sqrt(calculatebase(b1)+calculateperpendicular(p1));
       document.write("Hypothesis:"+h1);
}


calculatehypotenuse();
*/


/*Task-9 */


/*
function area(w,h)
{
        a=w*h;
        document.write("Area: "+a);
}
        
        document.write("Argument as variable"+"<br>");
        var width=8;
        var height=4;
        area(width,height);
        document.write("<br>"+"Argument as value"+"<br>");
        area(8,4);
*/



/*Task-10 */



/*
function palindrome(str)

        {

        var count=str.length;
        var count2=parseInt(count/2);
        var count3=count-1;
        var temp=0;

        if(count/2!=0)
        {
                for(var a=0;a<count;a++)
        {
                for(var b=count3;b>=0;b--)
                {
                        if(a==b)
                        break;
                        if((str[a]==str[b])&&(a!=b))
                        {
                        temp++;
                        }              
                }
        }

        if(temp==count2)
        {
                document.write("String is palindrome");
        }
        else
        document.write("String is not palindrome");

        }

        else
        document.write("String is not palindrome");

        }



var s1=prompt("Enter here","");
palindrome(s1);
*/


/*Task-11 */


/*Task-12 */


/*
function longest(string)
{
    var j = 0
    var a = string.split(" ")
    var length = a[0].length
    for(var i =0 ; i<a.length;i++)
    {
        if(a[i].length > length)
        {
            length = a[i].length
            j = i
        }
    }
    return a[j]
}
document.write(longest("web development tutorial"));
*/



/*Task-13 */


/*
function count_letter(string,letter)
{
    var count = 0
   for(var i =0;i<string.length;i++)
   {
       if(string[i] == letter)
       {
           count+=1
       }
   }
   return count
}
var string = window.prompt("Enter Any String :")
var letter = window.prompt("Enter Any letter from String :")
document.write("Occurence of letter "+letter+" in "+string+" is : "+count_letter(string,letter));
*/



/*Task-14 */


/*
function calcCircumference(r)
{
        var p=Math.PI;
        var circ=2*p*r;
        document.write("Circumference of Circle having Radius "+r+" : "+circ);
}

function calcArea(r)
{
        var p=Math.PI;
        var area=p*r*r;
        document.write("Area of Circle having Radius "+r+" : "+area);
}

calcCircumference(3);
document.write("<br>");
calcArea(2);

*/



/*==============Chap 38-42============== */



/* Task#1 */


/*
function my_pow(a,b)
{
    var c=a;
    for(var i=1;i<b;i++)
    {
        a=a*c;
    }
    document.write(a);
}


my_pow(2,4);
*/


/* Task#2 */

/*
function tr_side(a,b,c)
{
    var temp=((a+b+c)/2);
    return temp;
}

function tr_area()
{
    var v1=parseInt(prompt("Enter value for 'a'",""));
    var v2=parseInt(prompt("Enter value for 'b'",""));
    var v3=parseInt(prompt("Enter value for 'c'",""));
    var i=parseInt(v1);
    var j=parseInt(v2);
    var k=parseInt(v3);
    var side=tr_side(i,j,k);
    
    var area=side*(side-i)*(side-j)*(side-k);
    document.write("Area: "+area+"<br>"+" where value of a="+i+",b="+j+",c="+k+",s="+side);
}

tr_area();
*/


/* Task#3 */


/*
function sum(i,j,k)
{
    return (i+j+k);
}
function avg(x,y,z)
{
    var ag=(sum(x,y,z)/3);
    return ag;
}
function per(v1,v2,v3)
{
    var p1;
    p1=(sum(v1,v2,v3)/300)*100;
    return p1;
}
function main()
{
    var a1,b1,c1,a,b,c;
    a1=prompt("Enter marks for English","");
    b1=prompt("Enter marks for Maths","");
    c1=prompt("Enter marks for Science","");
    a=parseInt(a1);
    b=parseInt(b1);
    c=parseInt(c1);
    sum(a,b,c);
    document.write("Average of subjects: "+avg(a,b,c)+"<br>");
    document.write("Percentage: "+per(a,b,c));
}

main();

*/


/*
function my_indexof()
{

    for(var i=0;i<String.length;i++)
    {
        if(String[i]==a)
        {
            return i;
        }
    }
    
}

var str="hey";
alert(str.my_indexof("e"));
*/


/* Task#7 */


/*
var sen="My name is Huzaifa";
var temp1=0;
var temp2=0;

for(var a=0;a<sen.length;a++)
{
    switch(sen[a])
    {
        case 'a':
            temp1++;
            break;
        case 'e':
            temp2++;
            break;
        default:
            break;
        
    }
}
document.write("String:"+sen+"<br>");
document.write("Occurence of 'a' :"+temp1+"<br>");
document.write("Occurence of 'e' :"+temp2);
*/



/*
var sen="The Name";

document.write(sen+"<br>");
    sen.replace('a','u');

document.write(sen);
*/



/* Task#8 */

/*
function meter(a)
{
    return (a*1000);
}
function feet(b)
{
    return (b*3280.8399);
}
function inch(c)
{
    return (c*39370.0787);
}
function centi(d)
{
    return (d*100000);
}

var a=prompt("Enter distance between city A and B in km","");
var dist=parseInt(a);
document.write("Distance between city A and B in km is : "+(dist)+"<br>");
document.write("Distance in meter: "+meter(dist)+"<br>");
document.write("Distance in feet: "+feet(dist)+"<br>");
document.write("Distance in inch: "+inch(dist)+"<br>");
document.write("Distance in centimeter: "+centi(dist)+"<br>");
*/


/* Task#10 */


/*
var enter=prompt("Enter amount to withdraw","");
var amount=parseInt(enter);
var hun=Math.floor(amount/100);
var rem_hun=amount%100;
var fifty=Math.floor(rem_hun/50);
var rem_fifty=rem_hun%50;
var ten=Math.floor(rem_fifty/10);
var rem_ten=ten%10;


if(rem_hun==0)
{
    document.write("You have 100's note:"+hun+"<br>");
}
else if(rem_hun!=0)
{
    document.write("You have 100's note:"+hun+"<br>");
    document.write("You have 50's note:"+fifty+"<br>");
    if(rem_fifty!=0)
    {
        document.write("You have 10's note:"+ten+"<br>");
    }

}
*/



/*==============Chap 43-48============== */


/* Task#1 */


/*
function fun1()
{
    alert("You Clicked on a Link");
}
*/


/* Task#2 */


/*
function mob_fun1()
{
   alert("Company:Infinix\nModel:Infinix hot-8");  
}
function mob_fun2()
{
   alert("Company:Apple\nModel:Iphone-x-new");  
}
function mob_fun3()
{
   alert("Company:Samsung\nModel:Samsung galaxy-A50");  
}
function mob_fun4()
{
   alert("Company:Vivi\nModel:Vivo v17");  
}
*/


/* Task#3 */

/* Task#4 */


/*
function mouse_over_func()
{
    document.getElementById("id_1").style.display="none";
    document.getElementById("id_2").style.display="block";
}
function mouse_out_func()
{
    document.getElementById("id_1").style.display="block";
    document.getElementById("id_2").style.display="none";
}
*/

/* Task#5 */


/*
function btn1_func()
{
    var temp1=document.getElementById("para").innerHTML;
    var get_num1=parseInt(temp1);
    get_num1=get_num1+1;
    document.getElementById("para").innerHTML=get_num1;
}
function btn2_func()
{
    
    var temp2=document.getElementById("para").innerHTML;
    var get_num2=parseInt(temp2);
    get_num2=get_num2-1;
    document.getElementById("para").innerHTML=get_num2;
}
*/


/*==============Chap 49-52============== */


/* Task#1 */

/*
function form_data()
{
    document.getElementById("div1").style.display="none";
var fn=document.getElementById("first_name").value;
var ln=document.getElementById("last_name").value;
var em=document.getElementById("email").value;
var ph=document.getElementById("phone").value;
var add=document.getElementById("text_area").value;


document.write("First name:"+fn);
document.write("<br>");
document.write("Last name:"+ln);
document.write("<br>");
document.write("Email:"+em);
document.write("<br>");
document.write("Phone:"+ph);
document.write("<br>");
document.write("Address:"+add);
}
*/


/* Task#2 */


/*
function show_para()
{
        document.getElementById("para").style.display="block";
        document.getElementById("show_btn").style.display="none";
        document.getElementById("less_btn").style.display="block";

}
function less_para()
{
    
    document.getElementById("para").style.display="none";
    document.getElementById("show_btn").style.display="block";
    document.getElementById("less_btn").style.display="none";

}
*/


/* Task#3 */


/*
function fun()
{
    document.getElementById("r1").ro
}
*/


/*==============Chap 58-67============== */


/* Task#1 */

