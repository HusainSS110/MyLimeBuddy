function getBotResponse(input){
    input=input.toLowerCase();
    const text = "https://en.wikipedia.org/wiki/Limestone";
    if(input[input.length-1]!='?'){
        input+='?';
    }
    if (input == "hello?"||input == "hi?"||input == "hey?") {
        return "Hello there!";
    }
    else if (input == "bye?") {
        return "Talk to you later! Hope I was able to help";
    }
    else if (input == "where is limestone manufactured from?") {
        return "marine sediment deposited on sea floors";
    }
    // else if (input == "what is limestone?") {
    //    return text.link("https://en.wikipedia.org/wiki/Limestone");
    // } 
    else if (input == "which companies are your customer?") {
        return "AMR India Limited,CARMEUSE​,GLC Minerals LLC,Graymont Limited,Gujarat Mineral Development Corporation Ltd.,Imerys,Kerford Limestone,LafargeHolcim.";
    } 
    else if (input == "what is the price of 1 ton limestone in India?") {
        return "The current average market price of Natural Limestone is Rs 900/ Ton.";
    } 
    else if (input == "what are to tools you use for limestone mining?") {
        return "1.Drilling equipment: Limestone can be extracted by drilling vertical holes into the rock and then inserting explosives to break it up. The drilling equipment used for this purpose includes rock drills, drilling rigs, and blasthole drills.\n2.Excavators and loaders: After the limestone has been broken up, it needs to be removed from the quarry. Excavators and loaders are used to scoop up the broken limestone and transport it to the processing plant.\n3.Crushing and screening equipment: Once the limestone has been transported to the processing plant, it needs to be crushed and screened to produce a variety of different products. Crushers and screens are used for this purpose.\n4.Conveyors: Conveyors are used to transport the crushed and screened limestone from the processing plant to storage bins and loading areas.\n5.Dredging equipment: In some cases, limestone is extracted from underwater quarries using dredging equipment, such as suction dredges and cutter dredges.\n6.Trucks and haulers: Once the limestone has been processed, it is transported to its final destination, such as a construction site or manufacturing plant, using trucks and haulers.";
    } 
    else if (input == "does your limestone have good quality standards?") {
        return "Your limestone is extremely durable. It does, however, absorb water and, since it is a carbonate rock, it is highly reactive when exposed to acids or even mildly acidic rain water, and it can suffer substantial deterioration. The most common effect of weathering and erosion is loss of precise detail.";
    } 
    else if (input == "how can i book an appointment?") {
        return "You can contact us by phone(9321495619) or by reaching us at LIMESTONE_FARRUK@gmail.com";
    } 
    else if (input == "how are you?") {
        return "I'm fine.";
    }
    else {
        return "I wasn't able to understnd u.For more info contact us at +91 9322173579";
    }
}
