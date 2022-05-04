 function dynamicdropdown(listindex)
            {
                document.getElementById("sub_subcategory").length = 0;
                document.getElementById("sub_subcategory").options[0]=new Option("Please Choose subject","");
                document.getElementById("subcategory").length = 0;
                switch (listindex)
                {
                    case "Postutme" :
                        document.getElementById("subcategory").options[0]=new Option("Please Select University","");
                        document.getElementById("subcategory").options[1]=new Option("Ignatius Ajuru University","Ignatius");
                        document.getElementById("subcategory").options[1]=new Option("University of Port Harcourt","Uniport");
                        document.getElementById("subcategory").options[2]=new Option("Niger Delta University","Ndu");
                        break;
                    
                    case "Jamb" :
                        document.getElementById("subcategory").options[0]=new Option("Please Select School","");
                        document.getElementById("subcategory").options[1]=new Option("St. Augustine High school","Augustine");
                        document.getElementById("subcategory").options[2]=new Option("El-olam Global Academy","El-olam");
                        break;
                    case "Waec" :
                        document.getElementById("subcategory").options[0]=new Option("Please Select School","");
                        document.getElementById("subcategory").options[1]=new Option("St. Augustine High school","Augustine");
                        document.getElementById("subcategory").options[2]=new Option("El-olam Global Academy","El-olam");
                        document.getElementById("subcategory").options[3]=new Option("Holy mystical school","Holy");

                        break;
                    case "Neco" :
                        document.getElementById("subcategory").options[0]=new Option("Please Select School","");
                        document.getElementById("subcategory").options[1]=new Option("St. Augustine High school","Augustine");
                        document.getElementById("subcategory").options[2]=new Option("El-olam Global Academy","El-olam");
                        document.getElementById("subcategory").options[3]=new Option("Holy mystical school","Holy");
                        break;
                    default:
                        document.getElementById("subcategory").options[0]=new Option("Please Choose","");
                        break;
                }
                return true;
            }
            
            function dynamicdropdownone(listindex)
            {
                document.getElementById("sub_subcategory").length = 0;
                switch (listindex)
                {
                    case "Ignatius" :
                        document.getElementById("sub_subcategory").options[0]=new Option("Please Choose Subject","");
                        document.getElementById("sub_subcategory").options[1]=new Option("Mathematics","mathematics");
                        document.getElementById("sub_subcategory").options[2]=new Option("Biology","biology");
                        document.getElementById("sub_subcategory").options[3]=new Option("Geography","geography");
                        document.getElementById("sub_subcategory").options[4]=new Option("Chemistry","chemistry");
                        document.getElementById("sub_subcategory").options[5]=new Option("Computer Science","computer science");
                        break;

                    case "Uniport" :
                        document.getElementById("sub_subcategory").options[0]=new Option("Please Choose Subject","");
                        document.getElementById("sub_subcategory").options[1]=new Option("Mathematics","mathematics");
                        document.getElementById("sub_subcategory").options[2]=new Option("Biology","biology");
                        document.getElementById("sub_subcategory").options[3]=new Option("Geography","geography");
                        document.getElementById("sub_subcategory").options[4]=new Option("Chemistry","chemistry");
                        document.getElementById("sub_subcategory").options[5]=new Option("Computer Science","computer science");
                        break;
                    case "Ndu" :
                        document.getElementById("sub_subcategory").options[0]=new Option("Please Choose Subject","");
                        document.getElementById("sub_subcategory").options[1]=new Option("Biology","biology");
                        document.getElementById("sub_subcategory").options[2]=new Option("Mathematics","mathematics");
                        document.getElementById("sub_subcategory").options[3]=new Option("Chemistry","chemistry");
                        document.getElementById("sub_subcategory").options[4]=new Option("Computer Science","computer science");
                        document.getElementById("sub_subcategory").options[5]=new Option("Geography","geography");
                        break;
                    case "Augustine" :
                        document.getElementById("sub_subcategory").options[0]=new Option("Please Choose Subject","");
                        document.getElementById("sub_subcategory").options[1]=new Option("Biology","biology");
                        document.getElementById("sub_subcategory").options[2]=new Option("Mathematics","mathematics");
                        document.getElementById("sub_subcategory").options[3]=new Option("Chemistry","chemistry");
                        document.getElementById("sub_subcategory").options[4]=new Option("Computer Science","computer science");
                        document.getElementById("sub_subcategory").options[5]=new Option("Geography","geography");
                        break;
                    
                    case "El-olam" :
                        document.getElementById("sub_subcategory").options[0]=new Option("Please Choose Subject","");
                        document.getElementById("sub_subcategory").options[1]=new Option("Biology","biology");
                        document.getElementById("sub_subcategory").options[2]=new Option("Mathematics","mathematics");
                        document.getElementById("sub_subcategory").options[3]=new Option("Chemistry","chemistry");
                        document.getElementById("sub_subcategory").options[4]=new Option("Computer Science","computer science");
                        document.getElementById("sub_subcategory").options[5]=new Option("Geography","geography");
                        break;
                    case "Holy" :
                        document.getElementById("sub_subcategory").options[0]=new Option("Please Choose Subject","");
                        document.getElementById("sub_subcategory").options[1]=new Option("Biology","biology");
                        document.getElementById("sub_subcategory").options[2]=new Option("Mathematics","mathematics");
                        document.getElementById("sub_subcategory").options[3]=new Option("Chemistry","chemistry");
                        document.getElementById("sub_subcategory").options[4]=new Option("Computer Science","computer science");
                        document.getElementById("sub_subcategory").options[5]=new Option("Geography","geography");
                        break;
                        document.getElementById("sub_subcategory").options[0]=new Option("Please Choose","");
                        break;
                }
                return true;
            }