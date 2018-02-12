(function(){
        app.controller("pfController",["$scope","$http","$interval",function($scope,$http,$interval){
            $scope.userName = "piyusha";
            $scope.jobTitle = "UI developer";

            var getReposData = function(reposeRes){
                $scope.repos_user = reposeRes.data;
            }

            var getUserData = function(response){
                $scope.user = response.data;
                $http.get(response.data.repos_url).then(getReposData,errorHandler);
            }

           var errorHandler = function(response){
                $scope.errorMsg = "User"+response.data.message;
           }

            $http.get("https://api.github.com/users/"+$scope.userName).then(getUserData,errorHandler);

            $scope.objContact = [
                {title:"e",media:"piyusha.ladge@gmail.com",href:"piyusha.ladge@gmail.com"},
                {title:"w",media:"piyusha.ladge.com",href:"http://shashankchoudhari.github.io/"},
                {title:"m",media:"+91 9762971097"}
            ];

            $scope.profileTitle = "Professional summary";
            $scope.objProfile = [
                {keyPoint:"2.10 years of experience in HTML, Bootstrap, CSS, Javascript, jQuery."},
                {keyPoint:"Work experience in design wireframes using Photoshop."},
                {keyPoint:"Work experience in design psd in photoshop."},
                {keyPoint:"Experience in design website using html,bootstrap and css."},
                {keyPoint:"Experience in sending and retrieving data from server using Ajax, JSON."},
                {keyPoint:"Experience in handle events on website using jQuery."},
                {keyPoint:"Experience in Wordpress."},
                {keyPoint:"Experience in PHP."},
                {keyPoint:"Work experience in developing view & controller in CodeIgniter."},
                {keyPoint:"Good Communication and Interpersonal Skills, Good Team Player, Quick Learner."},
                {keyPoint:"Strong analytical ability, problem solving, decision making, goal oriented with commitment towards excellence."}
            ];

            $scope.Experience = "Work Experience";
            $scope.objExperience = [
                {jobTitle:"UI Specialist at Alphalogic inc.",subDetails:"Feb 2017-present",description:[
                    "Designed implemented and maintained web content",
                    "Collaborated with Web UI Developers throughout company to coordinate website managment",
                    "Worked on improved wordpress plugins and customise designs"
                ]},
                {jobTitle:"Software Developer at UBITECH Systems",subDetails:"Nov 2014-Jan 2017",description:[
                    "Designed implemented and maintained web content portals",
                    "Helped establish templates for coding design mockups and wireframes",
                    "Examined collected data for measuring site metric performances",
                    "Instrumental in the designs QA process and quality standards",
                    "Worked on improved web and mobile services"
                ]}
            ];

            $scope.skills = "Key Skills";
            $scope.objSkills = [
                {skill:"Bootstrap"},
                {skill:"HTML"},
                {skill:"css"},
                {skill:"Javascript"},
                {skill:"Jquery"},
                {skill:"Wordpress"},
                {skill:"Angular"},
                {skill:"php"}
            ];

            $scope.Projects = "Project Details";
            $scope.objProjects = [
                {
                    title:"E-commerce website (Fruitway)",
                    href:"http://www.fruiteway.com/",
                    responsibilities:[
                        "Design & develop website.",
                        "Develop controller & view for website.",
                        "Understanding client needs, requirements and expectations and device solutions accordingly.",
                        "Interacting with functional and end users for technical issues."
                    ]
                },
                {
                    title:" “Lagori” game website",
                    href:"http://www.lagoriworld.com/",
                    responsibilities:[
                        "Designing psd for web pages.",
                        "Develop website (HTML,bootstrap).",
                        "Handling events on website(jquery)."
                    ]
                },
                {
                    title:"Company portal",
                    href:"#",
                    responsibilities:[
                        "Designing of UI.",
                        "Writing script to enhance user intraction.",
                        "Driving the development process."
                    ]
                },
                {
                    title:"ERP software [Developer ERP, Crusher ERP, Della report ERP]",
                    href:"#",
                    responsibilities:[
                        "Designing wireframes for software.",
                        "Designing psd for respective pages.",
                        "Develop website (HTML).",
                        "Handling events on website(jquery)"
                    ]
                },
                {
                    title:"Leadformly website",
                    href:"http://app.leadformly.com/",
                    responsibilities:[
                        "Develop html pages.",
                        "Driving the development process.",
                        "Design in patternlab"
                    ]
                },
                {
                    title:"B2B Directory website",
                    href:"#",
                    responsibilities:[
                        "Build websites with WordPress.",
                        "Develop pages using plug-ins & themes",
                        "Customise pluging code as needed.",
                        "Driving the development process."                       
                    ]
                }
            ];

            $scope.Education = "Education";
            $scope.objQualification = [
                {description:"BE in Computer Engineering from Shivaji University, Kolhapur-2014."},
                {description:"Diploma in Information Technology from Government polytechnic, Kolhapur-2011"}
            ];

        }]);    
}()); 