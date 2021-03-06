'use strict';
/**
 * コンピューターがじゃんけんをして勝者を返す。
 * @return {string} 最終的な勝者
 */
const rockPaperScissors = () => {   
    const player = 5; //プレイヤー人数
    //プレイヤーとじゃんけん結果を入れる配列の作成
    let janken = [];    
    for(let i=0; i<player; i++){
        let lst=[]
        let p = i+1
        lst.push(p);
        lst.push(i);
        janken.push(lst);    
    }
    //勝負の間繰り返す
    while (janken.length > 1) {
        console.log(`${janken.length}人でじゃんけん`)
        let jkn =[] //プレイヤーの手数を調べるために用意した配列
        for(let j=0; j<janken.length; j++){
            let b = gcpg();
            janken[j][1] = b;
            jkn.push(b);
        }
        
        const rpsg = ["GU", "CHOKI", "PA", "GUN"]
        for(let element of janken){
            let hand = element[1];
            console.log(`player${element[0]}の手は${rpsg[hand]}`);
        }
        //勝ち負け判定部分
        //考慮するべきは、5人の手が2パターン,あるいは2～3パターン+銃（条件を満たさなければ常に負けだから）の時
        //勝った人は抜けていくルール
        let set1 = new Set(jkn); //プレイヤーの手数を調べる
        if(janken.length===3 && set1.size === 2){ //プレイヤーが3人以上、手数が2パターン
            if (set1.has(0) && set1.has(1)){
                janken = janken.filter(b => b[1]===0);
            } else if (set1.has(1) && set1.has(2)){
                janken = janken.filter(b => b[1]===1);
            } else if (set1.has(2) && set1.has(0)) {
                janken = janken.filter(b => b[1]===2);
            } else if (set1.has(3)){
                janken = janken.filter(b => b[1]===3);
            }
        } else if(janken.length===2 && set1.has(3)){//最後の2人になって銃とそれ以外なら銃の負け
            janken = janken.filter(b=>b[1]!=3);
        } else if(set1.has(3)){
            janken = janken.filter(b=>b[1]==3);
        }
    }
    return `player${janken[0][0]} が勝利しました`;
    
}

/**
 * じゃんけん結果をランダムに算出して返す関数
 * @return {Number} じゃんけん結果(0, 1, 2, 3)
 */
const gcpg = () => {
    return Math.floor(Math.random() *4);
} 

console.log(rockPaperScissors());




