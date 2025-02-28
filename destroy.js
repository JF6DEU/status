class destroy{
    // コンストラクタ
    constructor(){
        this.music = "全力少年院";
    }
    // 身につけたもの
    bukkowasite(){
        console.info("ぶっ壊される");
    }
    // 全力で物
    bukkowasita(){
        console.warn("ぶっ壊された");
    }
    // 乾いた脳を
    bukkowase_(){
        console.error("ぶっ壊せー!!");
    }
    // 世界を
    bukkowasu(){
        console.log("%cぶっ壊すのは%c僕だぁ", "color:#f00; font-size:5em", "color:#00f; font-size:5em");
    }
    // 視界は
    mou(){
        console.error("澄み切ってる");
        throw new TypeError(`以上、${this.music}でした。`);
    }
}