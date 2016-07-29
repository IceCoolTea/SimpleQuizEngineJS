var quizTitle = "ICT System Support and Maintenance";
var passingPercent = 70;
var questions = [
    // 1
    {
        question: "What are the two most common motherboard types ?",
        a1: "BBC and ITV",
        a2: "ABT and BTZ",
        a3: "ATX and BTX",
        a4: "AXT and BXT",
        aCorrect: 3
    },
    // 2
    {
        question: "What does the Acronym USB stand for ?",
        a1: "Universal Serial Board",
        a2: "Universal Socket Bus",
        a3: "Universal Service Bus",
        a4: "Universal Serial Bus",
        aCorrect: 4
    },
    // 3
    {
        question: "What does the Acronym BIOS stand for ?",
        a1: "Binary Input Output System",
        a2: "Basic Input Output System",
        a3: "Bus Input Output Serial",
        a4: "Broad Input Output Service",
        aCorrect: 2
    },
    // 4
    {
        question: "What is another name for Parallel Port ?",
        a1: "Printer Port",
        a2: "Interface Port",
        a3: "Modem Port",
        a4: "Expansion Port",
        aCorrect: 1
    },
    // 5
    {
        question: "What does the Acronym ATX stand for ?",
        a1: "Advanced Type External",
        a2: "Absolute Total Extreme",
        a3: "Advanced Technology Extended",
        a4: "Any Type Expansion ",
        aCorrect: 3
    },
    // 6
    {
        question: "You can use a Zip disk in a standard floppy disk drive ?",
        a1: "Yes",
        a2: "No",
        a3: "Maybe",
        a4: "Sometimes",
        aCorrect: 2
    },
    // 7
    {
        question: "What devices determine the best path to a destination and trace multiple networks ?",
        a1: "Switches",
        a2: "Routers",
        a3: "Hubs",
        a4: "Bridges",
        aCorrect: 2
    },
    // 8
    {
        question: "What network topology is the most versatile, easy to install and reconfigure. Also very fault tolerant ?",
        a1: "Bus",
        a2: "Star",
        a3: "Ring",
        a4: "Mesh",
        aCorrect: 2
    },
    // 9
    {
        question: "Are Slot A and slot 1 processors interchangeable ?",
        a1: "Yes",
        a2: "No",
        a3: "Maybe",
        a4: "Sometimes",
        aCorrect: 2
    },
    // 10
    {
        question: "What TCP/IP protocol handles the reliable delivery of data ?",
        a1: "IP",
        a2: "ICMP",
        a3: "TCP",
        a4: "UDP",
        aCorrect: 3
    },
    // 11
    {
        question: "Which OSI layer is logical addressing associated with ?",
        a1: "Physical",
        a2: "Datalink",
        a3: "Network",
        a4: "Transport",
        aCorrect: 3
    },
    // 12
    {
        question: "What is the maximum length of cable you can use for Ethernet 10BASE-T ?",
        a1: "100m",
        a2: "185m",
        a3: "200m",
        a4: "340m",
        aCorrect: 1
    },
    // 13
    {
        question: "What from the following does a computer need to communicate with a printer ?",
        a1: "A printer driver",
        a2: "A page description language",
        a3: "A correct interface",
        a4: "All of the above",
        aCorrect: 4
    },
    // 14
    {
        question: "Which of the following connectors are you most likely to see in an Ethernet network today ?",
        a1: "RJ45",
        a2: "RJ11",
        a3: "BNC",
        a4: "DB-15",
        aCorrect: 1
    },
    // 15
    {
        question: "What are PCL and Postscript examples of ?",
        a1: "Printer interfaces",
        a2: "Drivers",
        a3: "Page Description Languages",
        a4: "Interface Software",
        aCorrect: 3
    },
    // 16
    {
        question: "Which of the following ports will give you the greatest transmission speed ?",
        a1: "USB",
        a2: "Parallel",
        a3: "Serial",
        a4: "USB3.1",
        aCorrect: 4
    },
    // 17
    {
        question: "Switches are located at which OSI layer ?",
        a1: "Physical",
        a2: "Datalink",
        a3: "Network",
        a4: "Session",
        aCorrect: 2
    },
    // 18
    {
        question: "Modern BIOS's are normally stored in ?",
        a1: "ROM",
        a2: "EEPROM",
        a3: "Flash",
        a4: "RAM",
        aCorrect: 2
    },
    // 19
    {
        question: "The time and date resets to 1970-01-01 00:00 each time you restart the computer. What should you do ?",
        a1: "Reinstall OS",
        a2: "Check for Virus",
        a3: "Change CMOS Battery",
        a4: "Change Motherboard",
        aCorrect: 3
    },
    // 20
    {
        question: "What is the best description of switches and hubs from the list below ?",
        a1: "Hubs are faster than switches",
        a2: "Switches set up virtual circuits and reduce network bandwidth",
        a3: "More networking devices can be added to a hub",
        a4: "Switches can record physical addresses and hub can't",
        aCorrect: 4
    },
    // 21
    {
        question: "What does DVD stands for ?",
        a1: "Digital Versatile Disk",
        a2: "Digital Virtual Disk",
        a3: "Digital Video Drive",
        a4: "Digital Virtual Diagnostics",
        aCorrect: 1
    },
    // 22
    {
        question: "What contains basic input-output information required for correct operation of a computer ?",
        a1: "CPU",
        a2: "BIOS",
        a3: "RAM",
        a4: "NIC Card",
        aCorrect: 2
    },
    // 23
    {
        question: "You have a CD-ROM rated as 48X. What does 48X mean ?",
        a1: "The CD spins at 48000RPM",
        a2: "CD-ROM data transfer speed is 48 times faster than the hard drive",
        a3: "X refers to 48 times the normal CD speed of 150 KBps",
        a4: "X is a static reference used to rate CDROMs",
        aCorrect: 3
    },
    // 24
    {
        question: "Who has the authority to assign private IP addresses ?",
        a1: "VoIP",
        a2: "ICANN",
        a3: "IANA",
        a4: "No authority is required to use private IP adresses",
        aCorrect: 4
    },
    // 25
    {
        question: "How many Megabytes(MB) are in 1 Gigabyte(GB) ?",
        a1: "10",
        a2: "1000",
        a3: "1024",
        a4: "100",
        aCorrect: 3
    },
    // 26
    {
        question: "Where do you normally plug the CPU fan ?",
        a1: "USB",
        a2: "3 pin connector on motherboard",
        a3: "12 pin connector on motherboard",
        a4: "Molex connector",
        aCorrect: 2
    },
    // 27
    {
        question: "What is ULD ?",
        a1: "Unified Leveling Diagnostics",
        a2: "Unverified Levitating Disks",
        a3: "Upper Limb Disorder",
        a4: "Unhealthy Living Donation",
        aCorrect: 3
    },
    // 28
    {
        question: "What is ESD ?",
        a1: "Electrostatic Discharge",
        a2: "Electronic Disk",
        a3: "Elevated Dimensions",
        a4: "Entropy Discouragement",
        aCorrect: 1
    },
    // 29
    {
        question: "What items should have electrostatic packaging ?",
        a1: "Motherboard",
        a2: "Memory modules",
        a3: "Graphics Card",
        a4: "All of the above",
        aCorrect: 4
    },
    // 30
    {
        question: "What is COSHH ?",
        a1: "The Control for Fire and Smoke Regualtions",
        a2: "The Control for Work and Risks Regulations",
        a3: "The Control of Substances Hazardous to Health Regulations",
        a4: "The Control of Substances Healthy to Humans Regualtions",
        aCorrect: 3
    },
    // 31
    {
        question: "COSHH covers substances that can be ?",
        a1: "Coffee spills and food products leftovers",
        a2: "Cleaning materials, fumes, dusts and fungal spores",
        a3: "Drinking water and fizzy drinks",
        a4: "Fitness and Energy drinks/bars",
        aCorrect: 2
    },
    // 32
    {
        question: "Where can you use the Red Signal Fire Extinguishers (Water) ?",
        a1: "Class A fire",
        a2: "Class B fire",
        a3: "Class C fire",
        a4: "Class B & C fire",
        aCorrect: 1
    },
    // 33
    {
        question: "What is a hazard ?",
        a1: "Something that is scary",
        a2: "Something that makes you lose a game",
        a3: "Something that causes harm",
        a4: "Something that can improve IT Systems",
        aCorrect: 3
    },
    // 34
    {
        question: "What is a risk in Health and Safety ?",
        a1: "A board game",
        a2: "A financial venture",
        a3: "The chance of being harmed by a hazard",
        a4: "The chance to avoid a hazard",
        aCorrect: 3
    },
    // 35
    {
        question: "What is the first action when moving a load from the floor ?",
        a1: "Bend knees and get down to the load",
        a2: "Ask a colleague for assistance",
        a3: "Keep the load at arms length",
        a4: "Asses weight and bulk of the load",
        aCorrect: 4
    },
    // 36
    {
        question: "Eye strain often caused by ?",
        a1: "Glare from the monitor",
        a2: "Using TFT monitor",
        a3: "Adequate lightning",
        a4: "Using large font sizes",
        aCorrect: 1
    },
    // 37
    {
        question: "What is PAT testing ?",
        a1: "Public Acceptance Tolerance",
        a2: "Previous Analysis Theory",
        a3: "Portable Appliance Testing",
        a4: "Penetration Avoidance Tactics",
        aCorrect: 3
    },
    // 38
    {
        question: "Which one of the following types of ICT equipment requires PAT testing ?",
        a1: "All battery-powered 12 volt equipment without a plug",
        a2: "All computer units with plug",
        a3: "Moveable mains-rated equipment with a plug",
        a4: "Permanently sited mains-rated equipment with a plug",
        aCorrect: 3
    },
    // 39
    {
        question: "While working on a customer's system, you find an unreported problem. What should you do next ?",
        a1: "Continue and fix the problem regardless of cost",
        a2: "Only work on the current fault and return the system",
        a3: "Complete the initial work and then inform a colleague",
        a4: "Inform the customer and follow their instruction before continuing",
        aCorrect: 4
    },
    // 40
    {
        question: "Which one of the following poses a risk of electrical shock ?",
        a1: "An extension cable",
        a2: "A damaged keyboard",
        a3: "A damaged power lead",
        a4: "Trailing electrical cables",
        aCorrect: 3
    },
    // 41
    {
        question: "Which one of the following would be most likely to breach health and safety legislations ?",
        a1: "Disposal of a storage media containing customer data",
        a2: "Use of a damaged network cable",
        a3: "Excessive use of an ESD protection cable",
        a4: "Permanently removing safety covers on electrical equipment",
        aCorrect: 4
    },
    // 42
    {
        question: "Regulations on the control of hazardous substances apply when ?",
        a1: "Cleaning up excess toner in a laser printer",
        a2: "Disposing of excess printer paper",
        a3: "Disposing of ICT equipment packaging",
        a4: "Cleaning a scanning device",
        aCorrect: 1
    },
    // 43
    {
        question: "If hazards around the workplace are not reported or dealt with appropriately.. ",
        a1: "A risk of personal injury or harm could occur eventually",
        a2: "The health and safety manager will deal with it eventually",
        a3: "The employer will always deal with it eventually",
        a4: "The risk of personal injury will decrease eventually",
        aCorrect: 1
    },
    // 44
    {
        question: "When carrying out an ICT risk assessment there is a need to identify and report all ?",
        a1: "Hazardous equipment",
        a2: "ICT users",
        a3: "Broken chairs",
        a4: "Secured cables",
        aCorrect: 1
    },
    // 45
    {
        question: "A technician on a customer's site needs to remove the cover of a faulty printer. They should first.. ?",
        a1: "Consult the end user",
        a2: "Isolate the mains power",
        a3: "Consult the printer's set up menu",
        a4: "Remove the printer paper",
        aCorrect: 2
    },
    // 46
    {
        question: "Which one of the following is the correct formula to be used in determining a fuse rating ?",
        a1: "I = P + V",
        a2: "I = P x V",
        a3: "I = P / V",
        a4: "I = P - V",
        aCorrect: 3
    },
    // 47
    {
        question: "Which one of the following fire extinguishers is the most suitable to use on an electrical fire ?",
        a1: "CO2",
        a2: "Water",
        a3: "Powder",
        a4: "Foam",
        aCorrect: 1
    },
    // 48
    {
        question: "Static electricity can damage ICT equipment.. ?",
        a1: "Only if it is plugged into the mains supply",
        a2: "Only if it is unplugged from the mains supply",
        a3: "If ESD precautions are not taken",
        a4: "If health and safety precautions are not taken",
        aCorrect: 3
    },
    // 49
    {
        question: "Maintaining confidentiality with regard to the content of customer computers demonstrates ?",
        a1: "Technical competence",
        a2: "Business skills",
        a3: "Personal integrity",
        a4: "Safe working",
        aCorrect: 3
    },
    // 50
    {
        question: "When analysing a system failure, which of the following would be the best approach ?",
        a1: "Rely upon evidence obtained using the system diagnostics",
        a2: "Rely upon evidence obtained from the error log",
        a3: "Use evidence obtained from users, systems tests and the error log",
        a4: "Use evidence obtained from the system memory and the error log",
        aCorrect: 3
    },
    // 51
    {
        question: "What feature is characteristic of adware ?",
        a1: "Harmful virus that corrupts data",
        a2: "It is displayed in popup windows, which open faster than the user can close them",
        a3: "Sends out sensitive information",
        a4: "Its a malicious virus which gets into the computer by human error",
        aCorrect: 2
    },
    // 52
    {
        question: "A Berg connector is what connects a.. ?",
        a1: "Optical drive",
        a2: "Floppy drive",
        a3: "Harddrive",
        a4: "PSU",
        aCorrect: 2
    },
    // 53
    {
        question: "What does POST stand for ?",
        a1: "Peter On Sea Trip",
        a2: "Power On Self Test",
        a3: "Power On System Test",
        a4: "Power On System Trust",
        aCorrect: 2
    },
    // 54
    {
        question: "When it comes to security which file system is more secure ?",
        a1: "FAT",
        a2: "FAT32",
        a3: "NTFS",
        a4: "UDF",
        aCorrect: 3
    },
    // 55
    {
        question: "What is typically included in a service pack ?",
        a1: "Device drivers for non-standard devices",
        a2: "Virus definitions",
        a3: "Operating system upgrades and patches",
        a4: "Hardware compatibility list",
        aCorrect: 3
    },
    // 56
    {
        question: "What does ICMP stand for ?",
        a1: "Internet control message protocol",
        a2: "Ice cold master ponies",
        a3: "Internet cache master protocol",
        a4: "Information control message protocol",
        aCorrect: 1
    },
    // 57
    {
        question: "Which of the following is a software program that displays advertising on your computer ?",
        a1: "Spyware",
        a2: "Adware",
        a3: "Grayware",
        a4: "Virus",
        aCorrect: 2
    },
    // 58
    {
        question: "What does URL stand for ?",
        a1: "Unified Remote Location",
        a2: "Unidentified RAM Leverage",
        a3: "Uniform Resource Locator",
        a4: "Unknown Radioactive Lemon",
        aCorrect: 3
    },
    // 59
    {
        question: "What is the most appropriate action to take when a newly fitted component is found to be faulty ?",
        a1: "Attempt to fix the new component on-site",
        a2: "Remove the faulty component and inform the customer",
        a3: "Return the unit to base and attempt to fix the new component",
        a4: "Remove the faulty component and fit a new replacement component",
        aCorrect: 4
    },
    // 60
    {
        question: "Which type of memory is used in laptops ?",
        a1: "DIMM",
        a2: "RIMM",
        a3: "SODIMM",
        a4: "RAYMOSS",
        aCorrect: 3
    },
    // 61
    {
        question: "Which of the following the user interacts with, using menus and icons ?",
        a1: "CLI",
        a2: "BMI",
        a3: "ATA",
        a4: "GUI",
        aCorrect: 4
    },
    // 62
    {
        question: "An ICT technician should always be given information relating to fire and evacuation procedures when visiting a customer site. This statement is true for ?",
        a1: "All visits",
        a2: "Accompanied visits only",
        a3: "Unaccompanied visits only",
        a4: "Out-of-hours visit only",
        aCorrect: 1
    },
    // 63
    {
        question: "When adjusting the height on an it workstation chair and monitor, the ?",
        a1: "Operator should be looking upward at the monitor",
        a2: "Desktop should be at waist height",
        a3: "Operator’s knees should be slightly higher than their hips",
        a4: "Operator’s feet should be on the floor or a footrest",
        aCorrect: 4
    },
    // 64
    {
        question: "A box has arrived on site, which is too heavy for one person to lift. How should this problem be approached ?",
        a1: "Leave the box for a stronger to lift",
        a2: "Carry out a full written risk assessment",
        a3: "Two or more people should be asked to lift the box",
        a4: "Open the box and move the its content bit by bit",
        aCorrect: 3
    },
    // 65
    {
        question: "Which one of the following is not required in order to undertake a system repair if the system is out of the warranty period ?",
        a1: "Repair procedures",
        a2: "Available spare parts",
        a3: "Staff time and spare parts",
        a4: "Manufacturer's permission",
        aCorrect: 4
    },
    // 66
    {
        question: "When working on a ICT system, the primary benefit of recording action correctly is ?",
        a1: "Further repair could take less time",
        a2: "Future fault diagnosis will be done more efficiently",
        a3: "Manufacturer's may be able to produce error free equipment",
        a4: "Manufacturers must comply with warranty arrangements",
        aCorrect: 2
    },
    // 67
    {
        question: "When working on a ICT system, the primary benefit of recording action correctly is ?",
        a1: "Further repair could take less time",
        a2: "Future fault diagnosis will be done more efficiently",
        a3: "Manufacturer's may be able to produce error free equipment",
        a4: "Manufacturers must comply with warranty arrangements",
        aCorrect: 2
    },
    // 68
    {
        question: "On a ten month old ICT system, what is the most important step to take before applying corrective maintenance ?",
        a1: "Remove all faulty items and take them back for repair",
        a2: "Adjust management of the time it will take to complete the job",
        a3: "Check warranty status with manufacturer",
        a4: "Confirm availability of parts as listed in the service manual",
        aCorrect: 3
    },
    // 69
    {
        question: "On a ten month old ICT system, what is the most important step to take before applying corrective maintenance ?",
        a1: "Remove all faulty items and take them back for repair",
        a2: "Adjust management of the time it will take to complete the job",
        a3: "Check warranty status with manufacturer",
        a4: "Confirm availability of parts as listed in the service manual",
        aCorrect: 3
    },
    // 70
    {
        question: "On the customer's site you need to fix a system and the equipment is not accessible, what action should you take ?",
        a1: "Rearrange for mutual convenient time",
        a2: "Wait at the customer’s premises for someone to come back",
        a3: "Get unauthorised access to fix the system",
        a4: "Leave the customer’s premises immediately",
        aCorrect: 1
    }

]