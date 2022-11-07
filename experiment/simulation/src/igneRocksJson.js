tempMasterJson = {};
var masterJsonArr = [];
var tempQuestionArr = [];
masterJson = {};

questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Basic",
	"wrongAns1": "Intermediate",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Black or very dark brown ",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Black",
	"correctAns": "Brown",
	"wrongAns2": "Gray",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Glassy",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "None",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.7 -3.3",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Rich in dense iron and pyroxene minerals",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Calcium Plagioclase, Pyroxene",
	"wrongAns3": "Feldspar"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 1,
	"originalName": "Amygdaloidal Basalt",
	"dummyName": "igniRock1",
	"src": "images/Amgdaloidalbasalt.jpg",
	"src1": "images/Amgdaloidalbasalt1.jpg",
	"src2": "images/Amgdaloidalbasalt2.jpg",
	"chemical_Classification": "Basic",
	"colour": "Black or very dark brown",
	"streak": "Brown",
	"luster": "Dull",
	"mohs_Hardness": "6",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.7-3.3",
	"chemical_Composition": "Rich in dense iron and pyroxene minerals ",
	"specialProperties": "Found as candlesticks, bookends, plaques, figurines,sculptures, and vases.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Second Rock

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Intermediate",
	"wrongAns1": "Basic",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Dark gray to Black",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Light blue",
	"correctAns": "White to gray",
	"wrongAns2": "Pale gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Silky",
	"wrongAns3": "Glassy"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "90-degree cleavage and breaks easily.",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.8 - 3",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns1": "Rich in dense iron and pyroxene minerals",
	"wrongAns2": "Calcium Plagioclase, feldspar",
	"wrongAns3": "Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 2,
	"originalName": "Aphanitic Basalt",
	"dummyName": "igniRock2",
	"src": "images/AphaniticBasalt.jpg",
	//"src1": "images/AphaniticBasalt1.jpg",
	//"src2": "images/AphaniticBasalt2.jpg",
	"chemical_Classification": "Intermediate",
	"colour": "Dark gray to Black",
	"streak": "White to gray",
	"luster": "Dull",
	"mohs_Hardness": "6",
	"cleavage": "90-degree cleavage and breaks easily.",
	"diaphaneity": "Opaque",
	"gravity": "2.8-3",
	"chemical_Composition": "Consists mainly of iron and magnesium silicates, calcic plagioclase and pyroxene",
	"specialProperties": "Basalt is used in construction, making cobblestones and in making statues.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Thired Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Intermediate",
	"wrongAns1": "Basic",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Black, brown and gray",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Pale gray",
	"correctAns": "Black, gray",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Shiny",
	"wrongAns2": "Dull",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "None",
	"wrongAns1": "Indistinct",
	"wrongAns2": "Perfect",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "5.5 - 6.0",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.8 - 3",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Two-thirds plagioclase feldspar and one-third dark-coloured minerals, such as hornblende",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Calcium Plagioclase, Pyroxene",
	"wrongAns3": "Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 3,
	"originalName": "Biotite Diorite",
	"dummyName": "igniRock3",
	"src": "images/BiotiteDiorite.jpg",
	"src1": "images/BiotiteDiorite1.jpg",
	"src2": "images/BiotiteDiorite2.jpg",
	"chemical_Classification": "Intermediate",
	"colour": "Black, brown and gray.",
	"streak": "Black, gray",
	"luster": "Shiny",
	"mohs_Hardness": "5.5 - 6.0",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.8-3",
	"chemical_Composition": "Two-thirds plagioclase feldspar and one-third dark-coloured minerals, such as hornblende",
	"specialProperties": "It is used as a base material in the construction of roads buildings, and parking areas.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourth Rock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Mafic",
	"wrongAns1": "Basic",
	"wrongAns2": "Intermediate",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Dark Gray to Black ",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Black",
	"correctAns": "Brown to gray",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Silky",
	"wrongAns3": "Glassy"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "None",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.8 - 3",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Calcium Plagioclase, Pyroxene",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Calcium Plagioclase, Pyroxene",
	"wrongAns3": "Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 4,
	"originalName": "Compact Porphyritic Basalt",
	"dummyName": "igniRock4",
	"src": "images/Compactporphyriticbasalt.jpg",
	"src1": "images/Compactporphyriticbasalt1.jpg",
	"src2": "images/Compactporphyriticbasalt2.jpg",
//	"src3": "images/CompactporphyriticBasalt3.jpg",
	"chemical_Classification": "Mafic",
	"colour": "Dark Gray to Black ",
	"streak": "Brown to gray",
	"luster": "Dull",
	"mohs_Hardness": "6",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.8-3",
	"chemical_Composition": "Calcium Plagioclase, Pyroxene",
	"specialProperties": "It is most commonly crushed for use as an aggregate in construction projects.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fifth Rock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Felsic",
	"wrongAns1": "Basic",
	"wrongAns2": "Intermediate",
	"wrongAns3": "Mafic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Bluish-gray or pale gray",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Pearly white",
	"correctAns": "White",
	"wrongAns2": "Pale gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Subvitreous to Dull",
	"wrongAns2": "Glassy",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Pencil",
	"wrongAns2": "Inditinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "2-2.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.86-2.87",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Ca, Fe, Potassium Oxide, Mg, Potassium, Silicon Dioxide",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Calcium Plagioclase, Pyroxene",
	"wrongAns3": "Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 5,
	"originalName": "Dacite",
	"dummyName": "igniRock5",
	"src": "images/Dacite.jpg",
	//"src1": "images/Dacite1.jpg",
	//"src2": "images/Dacite2.jpg",
	
	"chemical_Classification": "Felsic",
	"colour": "Bluish-gray or pale gray",
	"streak": "White",
	"luster": "Subvitreous to Dull",
	"mohs_Hardness": "2-2.5",
	"cleavage": "Perfect",
	"diaphaneity": "Translucent",
	"gravity": "2.86-2.87",
	"chemical_Composition": "Ca, Fe, Potassium Oxide, Mg, Potassium, Silicon Dioxide",
	"specialProperties": "Dacite is sometimes used to produce crushed stone. It performs well as fill and as a loose aggregate in a wide variety of construction projects. It does not perform well as a concrete aggregate because its high silica content reacts with the cement.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Sixth Rock

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Intermediate",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Mafic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Black, brown, light to dark gray and white",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Light blue",
	"correctAns": "Bluish black",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Shiny",
	"wrongAns2": "Dull",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "None",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "5.5 - 6.0",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.8 to 3",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Calcium Plagioclase, Pyroxene",
	"wrongAns3": "Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 6,
	"originalName": "Diorite",
	"dummyName": "igniRock6",
	"src": "images/Diorite.jpg",
	"src1": "images/Diorite1.jpg",
	"src2": "images/Diorite2.jpg",
	"chemical_Classification": "Intermediate",
	"colour": "Black, brown, light to dark gray and white",
	"streak": "Bluish black",
	"luster": "Shiny",
	"mohs_Hardness": "5.5 - 6.0",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.8 - 3",
	"chemical_Composition": "Mainly composed of SiO<sub>2</sub>",
	"specialProperties": "Found in interior and exterior spaces of buildings.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Seventh Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Mafic, holocrystalline, subvolcanic rock",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Dark gray to black",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Light blue",
	"correctAns": "Black",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Glassy",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "None",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "5 - 6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.8",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "The essential minerals are plagioclase. feldspar and pyroxene, which together constitute between. about 60% and 80% of the total rock composition",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Calcium Plagioclase, Pyroxene",
	"wrongAns3": "Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 7,
	"originalName": "Dolerite",
	"dummyName": "igniRock7",
	"src": "images/DOLERITE1.jpg",
	"src1": "images/DOLERITE2.jpg",
	"src2": "images/DOLERITE3.jpg",
	"chemical_Classification": "Mafic, holocrystalline, subvolcanic rock",
	"colour": "Dark gray to black",
	"streak": "Black",
	"luster": "Dull",
	"mohs_Hardness": "5 - 6",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.8",
	"chemical_Composition": "The essential minerals are plagioclase. feldspar and pyroxene, which together constitute between. about 60% and 80% of the total rock composition",
	"specialProperties": "Dolerite is crushed and used as a construction aggregate for road beds, buildings, railroad beds",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Eight Rock

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Mafic",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Black or dark green",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Pale gray",
	"correctAns": "Black",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Shiny",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Not available",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.86-2.87",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Calcium Plagioclase, Pyroxene",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Feldspar"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 8,
	"originalName": "Gabbro Showing Play Of Colours",
	"dummyName": "igniRock8",
	"src": "images/Gabbro.jpg",
	"src1": "images/Gabbro1.jpg",
	"src2": "images/Gabbro2.jpg",
	"chemical_Classification": "Mafic",
	"colour": "Black or dark green",
	"streak": "Black",
	"luster": "Dull",
	"mohs_Hardness": "7",
	"cleavage": "Not available",
	"diaphaneity": "Opaque",
	"gravity": "2.86-2.87",
	"chemical_Composition": "Calcium Plagioclase, Pyroxene",
	"specialProperties": "Used to make curbing, ashlars, paving stones, and a variety of other rough-cut items",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Nineth Rock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Mafic",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Light brown or dark gray",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Light blue",
	"correctAns": "Black",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Glassy",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Not available",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.7-3.3",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Feldspar",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 9,
	"originalName": "Giant Phenocryst Basalt",
	"dummyName": "igniRock9",
	"src": "images/Giantphenocrystsbasalt.jpg",
	"src1": "images/Giantphenocrystsbasalt1.jpg",
	"src2": "images/Giantphenocrystsbasalt2.jpg",
	"chemical_Classification": "Mafic",
	"colour": "Light brown or dark gray",
	"streak": "Black",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "Not available",
	"diaphaneity": "Opaque",
	"gravity": "2.7-3.3",
	"chemical_Composition": "Feldspar",
	"specialProperties": "It is composed of mineral grains which are mostly indistinguishable to the naked eye. Basalt may also contain volcanic glass. Basalt may contain phenocrysts (larger crystals within fine-grained groundmass) and vesicules (holes that were filled by volcanic gases).",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Tenth Rock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Orthopyroxene granite",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Black, gray, orange, pink, white",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Bluish Black",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull",
	"wrongAns2": "Shiny",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "None",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.70-3.24",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "The charnockite series includes rocks of many different types, some being felsic and rich in quartz and microcline, others mafic and full of pyroxene and olivine",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 10,
	"originalName": "Charnockite",
	"dummyName": "igniRock10",
	"src": "images/CHARNOKITE1.jpg",
	"src1": "images/CHARNOKITE2.jpg",
	"src2": "images/CHARNOKITE3.jpg",
	"chemical_Classification": "Orthopyroxene granite",
	"colour": "Black, gray, orange, pink, white",
	"streak": "White",
	"luster": "Dull",
	"mohs_Hardness": "6-7",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.70-3.24",
	"chemical_Composition": "The charnockite series includes rocks of many different types, some being felsic and rich in quartz and microcline, others mafic and full of pyroxene and olivine",
	"specialProperties": "Charnockites are igneous while granulites are metamorphic. Charnockite is coarse-grained and lacks foliage. Both of these have a similar utility and are often used in the construction industry.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;
//Eleven Rock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Quartz and feldspar",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "White, pink, or gray",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Black",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull to Grainy with Sporadic parts Pearly and Vitreous",
	"wrongAns2": "Shiny",
	"wrongAns3": "Glassy"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "None",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.6-2.7",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Aluminium Oxide, CaO, Iron(III) Oxide, FeO, Potassium Oxide, MgO, MnO, Sodium Oxide, Phosphorus Pentoxide, Silicon Dioxide, Titanium Dioxide",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 11,
	"originalName": "Granite",
	"dummyName": "igniRock11",
	"src": "images/Granite.jpg",
	"src1": "images/Granite1.jpg",
	"src2": "images/Granite2.jpg",
	"chemical_Classification": "Quartz and feldspar",
	"colour": " White, pink, or gray",
	"streak": "White",
	"luster": "Dull to Grainy with Sporadic parts Pearly and Vitreous",
	"mohs_Hardness": "6-7",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.6-2.7",
	"chemical_Composition": "Aluminium Oxide, CaO, Iron(III) Oxide, FeO, Potassium Oxide, MgO, MnO, Sodium Oxide, Phosphorus Pentoxide, Silicon Dioxide, Titanium Dioxide",
	"specialProperties": "Granite characteristics include strength and durability. This unique and elegant natural stone is one of the oldest, hardest, and strongest stones available. A truly beautiful natural stone with hundreds of colors and patterns to choose from.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

// Tweleve  Rock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Leucocratic granitic rock",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Pink, white, variations of gray and black",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Bluish black",
	"correctAns": "Gray",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Vitreous",
	"correctAns": "Pearly and vitreous",
	"wrongAns2": "Dull",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "None",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.6-2.7",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Aluminium Oxide, CaO, Iron(III) Oxide, FeO, Potassium Oxide, MgO, MnO, Sodium Oxide, Phosphorus Pentoxide, Silicon Dioxide, Titanium Dioxide",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 12,
	"originalName": "Graphic Granite",
	"dummyName": "igniRock12",
	"src": "images/GraphicGranite.jpg",
	"src1": "images/GraphicGranite1.jpg",
	"src2": "images/GraphicGranite2.jpg",
	"chemical_Classification": "Leucocratic granitic rock",
	"colour": "Pink, white, variations of gray and black",
	"streak": "Gray",
	"luster": "Pearly and vitreous",
	"mohs_Hardness": "6-7",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.6-2.7",
	"chemical_Composition": "Aluminium Oxide, CaO, Iron(III) Oxide, FeO, Potassium Oxide, MgO, MnO, Sodium Oxide, Phosphorus Pentoxide, Silicon Dioxide, Titanium Dioxide",
	"specialProperties": "Granite characteristics include strength and durability. This unique and elegant natural stone is one of the oldest, hardest, and strongest stones available. A truly beautiful natural stone with hundreds of colors and patterns to choose from.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

// Thirteen Rock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Silicate",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Pure green to greenish-black",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray",
	"correctAns": "Pale gray, gray-white, white, colorless",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Dull",
	"correctAns": "Vitreous to dull",
	"wrongAns2": "Shiny",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Imperfect at 56&deg; and 124&deg;",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.9",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "(Ca,Na)<sub>2</sub>(Mg,Fe,Al)<sub>5</sub>(Al,Si)<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Translucent to nearly opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 13,
	"originalName": "Hornblende Granite",
	"dummyName": "igniRock13",
	"src": "images/Horblendegranite.jpg",
	"src1": "images/Horblendegranite1.jpg",
	"src2": "images/Horblendegranite2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Pure green to greenish-black",
	"streak": "Pale gray, gray-white, white, colorless",
	"luster": "Vitreous to dull",
	"mohs_Hardness": "5-6",
	"cleavage": "Imperfect at 56&deg; and 124&deg;",
	"diaphaneity": "Translucent to nearly opaque",
	"gravity": "2.9",
	"chemical_Composition": "(Ca,Na)<sub>2</sub>(Mg,Fe,Al)<sub>5</sub>(Al,Si)<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>",
	"specialProperties": "Granite characteristics include strength and durability. This unique and elegant natural stone is one of the oldest, hardest, and strongest stones available. A truly beautiful natural stone with hundreds of colors and patterns to choose from.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;
// Fourteen Rock
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Silicate",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Pure green to greenish-black",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray",
	"correctAns": "Pale gray, gray-white, white, colorless",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Silky",
	"correctAns": "Dull",
	"wrongAns2": "Viterous",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Imperfect at 56&deg; and 124&deg;",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.9",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "(Ca,Na)<sub>2</sub>(Mg,Fe,Al)<sub>5</sub>(Al,Si)<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Translucent to nearly opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 14,
	"originalName": "Hydrothermally Altered Amygdaloidal Basalt",
	"dummyName": "igniRock14",
	"src": "images/HYDROTHERMALLYAMYGDALOIDALBASALT1.jpg",
	"src1": "images/HYDROTHERMALLYAMYGDALOIDALBASALT2.jpg",
	"src2": "images/HYDROTHERMALLYAMYGDALOIDALBASALT3.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Pure green to greenish-black",
	"streak": "Pale gray, gray-white, white, colorless",
	"luster": "Dull",
	"mohs_Hardness": "5-6",
	"cleavage": "Imperfect at 56&deg; and 124&deg;",
	"diaphaneity": "Translucent to nearly opaque",
	"gravity": "2.9",
	"chemical_Composition": "(Ca,Na)<sub>2</sub>(Mg,Fe,Al)<sub>5</sub>(Al,Si)<sub>8</sub>O<sub>22</sub>(OH)<sub>2</sub>",
	"specialProperties": "Hydrothermal alteration is defined as any alteration of rocks or minerals by the reaction of hydrothermal fluid with preexisting solid phases.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;
// Fifteen Rock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Silicate",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Thick specimens often appear to be black, brown, or silver in color; however, when split into thin sheets muscovite is colorless, sometimes with a tint of brown, yellow, green, or rose",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Pale gray, gray-white, white, colorless",
	"correctAns": "White, often sheds tiny flakes",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Silky",
	"correctAns": "Pearly to Vitreous",
	"wrongAns2": "Dull",
	"wrongAns3": "Vitreous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Imperfect at 56&deg; and 124&deg;",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.8 - 2.9",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "KAl<sub>2</sub>(Si<sub>3</sub>AlO<sub>10</sub>)(OH)<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 15,
	"originalName": "Muscovite Granite",
	"dummyName": "igniRock15",
	"src": "images/MuscoviteGranite.jpg",
	"src1": "images/MuscoviteGranite1.jpg",
	"src2": "images/MuscoviteGranite2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Thick specimens often appear to be black, brown, or silver in color; however, when split into thin sheets muscovite is colorless, sometimes with a tint of brown, yellow, green, or rose",
	"streak": "White, often sheds tiny flakes",
	"luster": "Pearly to Vitreous",
	"mohs_Hardness": "5-6",
	"cleavage": "Imperfect at 56&deg; and 124&deg;",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.8 - 2.9",
	"chemical_Composition": "KAl<sub>2</sub>(Si<sub>3</sub>AlO<sub>10</sub>)(OH)<sub>2</sub>",
	"specialProperties": "Muscovite is easily identified because its perfect cleavage allows it to be split into thin, flexible, elastic, colorless, transparent sheets with a pearly to vitreous luster. It is the only common mineral with these properties.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;



// Sixteen Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Silicate",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Deep black or blackish green",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "White",
	"correctAns": "Pale gray, gray-white, white, colorless",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Silky",
	"correctAns": "Glassy",
	"wrongAns2": "Shiny",
	"wrongAns3": "Dull"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "It is translucent in thin cleavage fragments and along sharp margins.",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Pencil"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.6",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 16,
	"originalName": "Obsidian",
	"dummyName": "igniRock16",
	"src": "images/Obsidian.jpg",
	"src1": "images/Obsidian1.jpg",
	"src2": "images/Obsidian2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Deep black or blackish green",
	"streak": "White",
	"luster": "Glassy",
	"mohs_Hardness": "5-6",
	"cleavage": "It is translucent in thin cleavage fragments and along sharp margins.",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.6",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Obsidian was used to make knives, arrowheads, spear points, scrapers, and many other weapons and tools. Once these discoveries were made, obsidian quickly became the raw material of preference for producing almost any sharp object.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

// Seventeen Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Intrusive igneous rocks",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Gray or black",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Pale gray, gray-white, white, colorless",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous, grainy, and pearly",
	"wrongAns2": "Dull",
	"wrongAns3": "Vitreous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "The large pink crystals with the obvious cleavage planes are K-feldspars.",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "Pencil"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.6 to 2.63",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Compositionally, the pegmatites consist of the feldspars, quartz, and muscovite with local concentrations of accessory minerals such as beryl , spodumene , tourmaline , columbite -tantalite, triphylite-lithiophilite, amblygonite , and minor sulfides and arsenides.",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 17,
	"originalName": "Pegmatite",
	"dummyName": "igniRock17",
	"src": "images/Pegmatite.jpg",
	"src1": "images/Pegmatite1.jpg",
	"src2": "images/Pegmatite2.jpg",
	"chemical_Classification": "Intrusive igneous rocks",
	"colour": "Gray or black",
	"streak": "White",
	"luster": "Vitreous, grainy, and pearly",
	"mohs_Hardness": "7",
	"cleavage": "The large pink crystals with the obvious cleavage planes are K-feldspars.",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.6 to 2.63",
	"chemical_Composition": "Compositionally, the pegmatites consist of the feldspars, quartz, and muscovite with local concentrations of accessory minerals such as beryl , spodumene , tourmaline , columbite -tantalite, triphylite-lithiophilite, amblygonite , and minor sulfides and arsenides.",
	"specialProperties": "Pegmatites contain exceptionally large crystals and they contain rarely minerals than other types of rocks. They have interlocking crystals usually larger than 2.5 cm in size. Generally, most Pegmatites are found in sheets of rock that are dikes and veins Also near large masses of igneous rocks called batholiths.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


// Eighteen Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Intrusive igneous rocks",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Pinkish gray",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Black",
	"correctAns": "Gray over a white background",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Silky",
	"correctAns": "Highly reflective vitreous luster",
	"wrongAns2": "Dull",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Granite naturally exhibits anisotropic elasticity because of the alignment of minerals formed in the three orthogonal cleavage planes known as rift, grain, and hardway planes.",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.7",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Pink granite, like other granites is an intrusive igneous rock typically containing feldspar, quartz, mica & amphibole minerals",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 18,
	"originalName": "Pink Granite",
	"dummyName": "igniRock18",
	"src": "images/PinkGranite.jpg",
	"src1": "images/PinkGranite1.jpg",
	"src2": "images/PinkGranite2.jpg",
	"chemical_Classification": "Intrusive igneous rocks",
	"colour": "Pinkish gray",
	"streak": "Gray over a white background",
	"luster": "Highly reflective vitreous luster",
	"mohs_Hardness": "6",
	"cleavage": "Granite naturally exhibits anisotropic elasticity because of the alignment of minerals formed in the three orthogonal cleavage planes known as rift, grain, and hardway planes.",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.7",
	"chemical_Composition": "Pink granite, like other granites is an intrusive igneous rock typically containing feldspar, quartz, mica & amphibole minerals",
	"specialProperties": "It has very dense silica content. Since the rock is made largely of silica from magma, it contains a large amount of silica. Due to the large presence of silica in its composition, granite is highly resistant to decay.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;



// Nineteen Rock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Intrusive igneous rocks",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Predominately white",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "White",
	"wrongAns2": "Gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous",
	"wrongAns2": "Dull",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Granite naturally exhibits anisotropic elasticity because of the alignment of minerals formed in the three orthogonal cleavage planes known as rift, grain, and hardway planes.",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.67",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "Felsic",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 19,
	"originalName": "Porphyritic Granite",
	"dummyName": "igniRock19",
	"src": "images/PorphyriticGranite.jpg",
	"src1": "images/PorphyriticGranite1.jpg",
	"src2": "images/PorphyriticGranite2.jpg",
	"chemical_Classification": "Intrusive igneous rocks",
	"colour": "Predominately white",
	"streak": "White",
	"luster": "Vitreous",
	"mohs_Hardness": "6-7",
	"cleavage": "Granite naturally exhibits anisotropic elasticity because of the alignment of minerals formed in the three orthogonal cleavage planes known as rift, grain, and hardway planes.",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.67",
	"chemical_Composition": "Felsic",
	"specialProperties": "In terms of its mineral content this is a typical granite, consisting of pink potassium feldspar, cream sodium feldspar (plagioclase), gray quartz and black biotite mica. The most striking feature of its texture is the large pink angular potassium feldspar crystals (one of which is indicated by the yellow pointer).",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;



// Twenty Rock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Intrusive igneous rocks",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "White or tan",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "None",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Silky",
	"correctAns": "Glassy",
	"wrongAns2": "Dull",
	"wrongAns3": "Viterous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Granite naturally exhibits anisotropic elasticity because of the alignment of minerals formed in the three orthogonal cleavage planes known as rift, grain, and hardway planes.",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.7",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "It is commonly composed of approximately 50% silica and 10% calcium oxide with lesser contents of potash and soda",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 20,
	"originalName": "Porphyritic Vesicular Basalt",
	"dummyName": "igniRock20",
	"src": "images/PORPHYRITICVESICULARBASALT1.jpg",
	"src1": "images/PORPHYRITICVESICULARBASALT2.jpg",
	"src2": "images/PORPHYRITICVESICULARBASALT3.jpg",
	"chemical_Classification": "Intrusive igneous rocks",
	"colour": "White or tan",
	"streak": "None",
	"luster": "Glassy",
	"mohs_Hardness": "6-7",
	"cleavage": "Granite naturally exhibits anisotropic elasticity because of the alignment of minerals formed in the three orthogonal cleavage planes known as rift, grain, and hardway planes.",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.7",
	"chemical_Composition": "It is commonly composed of approximately 50% silica and 10% calcium oxide with lesser contents of potash and soda",
	"specialProperties": "The drop in pressure that a magma experiences as it flows from underground to the Earth's surface allows water and gases in the lava to form bubbles. If the bubbles do not get large enough to pop, they are frozen in the lava as vesicles.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;



// Twenty-one Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Mafic",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Reddish brown",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "White",
	"wrongAns2": "pale gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Silky",
	"correctAns": "Subvitreous to Dull",
	"wrongAns2": "Dull",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "None of these",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "It is commonly composed of approximately 50% silica and 10% calcium oxide with lesser contents of potash and soda",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 21,
	"originalName": "Scoria",
	"dummyName": "igniRock21",
	"src": "images/SCORIA1.jpg",
	"src1": "images/SCORIA2.jpg",
	"src2": "images/SCORIA3.jpg",
	"chemical_Classification": "Mafic",
	"colour": "Reddish brown",
	"streak": "White",
	"luster": "Subvitreous to Dull",
	"mohs_Hardness": "5-6",
	"cleavage": "Perfect",
	"diaphaneity": "Opaque",
	"gravity": "NA",
	"chemical_Composition": "It is commonly composed of approximately 50% silica and 10% calcium oxide with lesser contents of potash and soda",
	"specialProperties": "Scoria has several useful characteristics that influence how it is used. It is somewhat porous, has a high surface area and strength for its weight, and often has striking colours. Consequently, it is often used in landscaping and drainage works. It is also commonly used in gas barbecue grills.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;



// Twenty-Two Rock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Silicon dioxide",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Light gray",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "White",
	"wrongAns2": "Pale gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Subvitreous to Dull",
	"correctAns": "Silky",
	"wrongAns2": "Dull",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "Very Low",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "Transparent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 22,
	"originalName": "Pumice",
	"dummyName": "igniRock22",
	"src": "images/Pumice.jpg",
	"src1": "images/Pumice1.jpg",
	"src2": "images/Pumice2.jpg",
	"chemical_Classification": "Silicon dioxide",
	"colour": "Light gray",
	"streak": "White",
	"luster": "Silky",
	"mohs_Hardness": "6",
	"cleavage": "Perfect",
	"diaphaneity": "Transparent",
	"gravity": "Very Low",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Pumice is an unusually light rock due to the many bubbles inside it. Pumice has an average porosity of 90% and initially floats on water. Pumice varies in density according to the thickness of the solid material between the bubbles; many samples float in water.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;



// Twenty-Three Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Extrusive, igneous rock",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Light gray",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Subvitreous to Dull",
	"correctAns": "None of these",
	"wrongAns2": "Dull",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "Very Low",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "None of these",
	"wrongAns1": "Transparent to translucent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 23,
	"originalName": "Rhyolite",
	"dummyName": "igniRock23",
	"src": "images/Rhyolite.jpg",
	"src1": "images/Rhyolite1.jpg",
	"src2": "images/Rhyolite2.jpg",
	"chemical_Classification": "Extrusive, igneous rock",
	"colour": "Light gray",
	"streak": "White",
	"luster": "NA",
	"mohs_Hardness": "6",
	"cleavage": "Perfect",
	"diaphaneity": "NA",
	"gravity": "Very Low",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "The rhyolite rock may show banding or spherical growth. If stones are observed in cross-section using magnification they generally show crystalline growth and may show radiating needle patterns.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;



// Twenty-Four Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Composed of an alkali feldspar and a ferromagnesian mineral",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Variable but typically light coloured",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Subvitreous to Dull",
	"correctAns": "None of these",
	"wrongAns2": "Dull",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Perfect",
	"wrongAns1": "Pencil",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "5.5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.6-2.7",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "None of these",
	"wrongAns1": "Transparent to translucent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 24,
	"originalName": "Syenite",
	"dummyName": "igniRock24",
	"src": "images/Syenite.jpg",
	"src1": "images/Syenite1.jpg",
	"src2": "images/Syenite2.jpg",
	"chemical_Classification": "Composed of an alkali feldspar and a ferromagnesian mineral",
	"colour": "Variable but typically light coloured",
	"streak": "White",
	"luster": "NA",
	"mohs_Hardness": "5.5-6",
	"cleavage": "Perfect",
	"diaphaneity": "NA",
	"gravity": "2.6-2.7",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Syenite rock was used to make the Quay with Sphinxes. In Australia syenite occurs as small intrusive bodies in nearly every state. In New South Wales, a large syenite intruded during the breakup of Gondwana in the Cretaceous.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;




// Twenty-Five Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Monzogranitic",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Pink, gray- white",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Subvitreous to Dull",
	"correctAns": "Vitreous, sometimes resinous",
	"wrongAns2": "Dull",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Indistinct",
	"wrongAns1": "Perfect",
	"wrongAns2": "Pencil",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "7.0-7.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.6-2.63",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "None of these",
	"wrongAns1": "Transparent to translucent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 25,
	"originalName": "Tourmaline Pegmatite",
	"dummyName": "igniRock25",
	"src": "images/TourmalinePegmatite.jpg",
	"src1": "images/TourmalinePegmatite1.jpg",
	"src2": "images/TourmalinePegmatite2.jpg",
	"chemical_Classification": "Monzogranitic",
	"colour": "Pink, gray- white",
	"streak": "White",
	"luster": "Vitreous, sometimes resinous",
	"mohs_Hardness": "7.0-7.5",
	"cleavage": "Indistinct",
	"diaphaneity": "NA",
	"gravity": "2.6-2.63",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Pegmatites contain exceptionally large crystals and they contain rarely minerals than other types of rocks. They have interlocking crystals usually larger than 2.5 cm in size. Generally most Pegmatites are found in sheets of rock that are dikes and veins Also near large masses of igneous rocks called batholiths.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;



// Twenty-Six Rock

tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Extrusive igneous rock composed mostly of alkali feldspar",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Light-colored",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "White",
	"wrongAns2": "Pale gray",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Subvitreous to Dull",
	"correctAns": "Metallic",
	"wrongAns2": "Dull",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Indistinct",
	"wrongAns1": "Perfect",
	"wrongAns2": "Pencil",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.7",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "None of these",
	"wrongAns1": "Transparent to translucent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 26,
	"originalName": "Trachyte",
	"dummyName": "igniRock26",
	"src": "images/Trachyte.jpg",
	"src1": "images/Trachyte1.jpg",
	"src2": "images/Trachyte2.jpg",
	"chemical_Classification": "Extrusive igneous rock composed mostly of alkali feldspar",
	"colour": "Light-colored",
	"streak": "White",
	"luster": "Metallic",
	"mohs_Hardness": "6",
	"cleavage": "Indistinct",
	"diaphaneity": "NA",
	"gravity": "2.7",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Trachytes are typically fine-grained and light-colored, but can be black if they consist mostly of glass. They are often porphyritic, with large well-shaped crystals of sanidine in a groundmass containing much smaller imperfect sanidine laths.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;



// Twenty-Seven Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Pyroclastic",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Light-gray",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"correctAns": "Dull to Pearly",
	"wrongAns1": "Metallic",
	"wrongAns2": "Viterous",
	"wrongAns3": "Dull"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Non-existent",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.86-2.87",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "None of these",
	"wrongAns1": "Transparent to translucent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 27,
	"originalName": "Volcanic Breccia with Gray Lava",
	"dummyName": "igniRock27",
	"src": "images/VolcanicBrecciawithGreyLava.jpg",
//	"src1": "images/VolcanicBrecciawithGreyLava1.jpg",
//	"src2": "images/VolcanicBrecciawithGreyLava2.jpg",
	"chemical_Classification": "Pyroclastic",
	"colour": "Light-gray",
	"streak": "White",
	"luster": "Dull to Pearly",
	"mohs_Hardness": "7",
	"cleavage": "Non-existent",
	"diaphaneity": "NA",
	"gravity": "2.86-2.87",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "The clasts in breccia are angular, while the clasts in conglomerate rock are rounded. Breccia comes in many colors and compositions. Breccia is mainly used to make decorative architectural elements. It may be polished to make decorative features or gemstones.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


// Twenty-Eight Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Pyroclastic",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Gray",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Metallic",
	"correctAns": "Dull to Pearly",
	"wrongAns2": "Dull",
	"wrongAns3": "Shiny"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Non-existent",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.86-2.87",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "None of these",
	"wrongAns1": "Transparent to translucent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 28,
	"originalName": "Volcanic Breccia",
	"dummyName": "igniRock28",
	"src": "images/VolcanicBreccia.jpg",
//	"src1": "images/VolcanicBreccia1.jpg",
//	"src2": "images/VolcanicBreccia2.jpg",
	"chemical_Classification": "Pyroclastic",
	"colour": "Gray",
	"streak": "White",
	"luster": "Dull to Pearly",
	"mohs_Hardness": "7",
	"cleavage": "Non-existent",
	"diaphaneity": "NA",
	"gravity": "2.86-2.87",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "The ash is very fine grained, so only the rock fragments and pumice are identifiable. A rock with a pyroclastic texture is termed a tuff if the largest fragments are less than 2.5 inches long, a volcanic breccia if the fragments are larger.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

// Twenty-Nine Rock


tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this igneous rock?",
	"correctAns": "Amorphous",
	"wrongAns1": "Basic",
	"wrongAns2": "Felsic",
	"wrongAns3": "Intermediate"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this igneous rock?",
	"correctAns": "Yellow",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Black, brown, light to dark gray and white"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this igneous rock?",
	"wrongAns1": "Gray over a white background",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this igneous rock?",
	"wrongAns1": "Metallic",
	"correctAns": "Dull to Pearly",
	"wrongAns2": "Viterous",
	"wrongAns3": "Silky"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this igneous rock?",
	"correctAns": "Non-existent",
	"wrongAns1": "Perfect",
	"wrongAns2": "Indistinct",
	"wrongAns3": "It is translucent in thin cleavage fragments and along sharp margins."
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this igneous rock?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this igneous rock?",
	"correctAns": "2.3 - 2.5",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this igneous rock?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Consists mainly of iron and magnesium silicates,calcic plagioclase and pyroxene",
	"wrongAns2": "Mainly composed of SiO<sub>2</sub>",
	"wrongAns3": "Calcium Plagioclase, Pyroxene"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this igneous rock?",
	"correctAns": "None of these",
	"wrongAns1": "Transparent to translucent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 29,
	"originalName": "Volcanic Glass",
	"dummyName": "igniRock29",
	"src": "images/Volcanicglass.jpg",
	"src1": "images/Volcanicglass1.jpg",
	"src2": "images/Volcanicglass2.jpg",
	"chemical_Classification": "Amorphous",
	"colour": "Yellow",
	"streak": "White",
	"luster": "Dull to Pearly",
	"mohs_Hardness": "7",
	"cleavage": "Non-existent",
	"diaphaneity": "NA",
	"gravity": "2.3 - 2.5",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Volcanic glasses are commonly dark or black, although these structures can also be brown, tan, green even blue, red, orange, or yellow depending on the trace elements or inclusions. Like any crystal, volcanic glasses are chemically metastable, that is, with the passage of time, the volcanic glasses can crystallize.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;








