/* LinguaPulse — Japanese Language Academy — application logic
   Extracted from the existing index.html. Static GitHub Pages project.
*/
// Navigation Switcher
        function switchView(viewId, btn) {
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(viewId).classList.add('active');
            if (btn) btn.classList.add('active');
        }

        // 1. 100 JLPT N5 KANJI DATASET
        const kanjiData = [
            { kanji: "一", meaning: "One", readings: "On: イチ | Kun: ひと", sentenceJp: "一つあります。", sentenceEn: "There is one." },
            { kanji: "二", meaning: "Two", readings: "On: ニ | Kun: ふた", sentenceJp: "二人でいきます。", sentenceEn: "Two of us will go." },
            { kanji: "三", meaning: "Three", readings: "On: サン | Kun: みっ・つ", sentenceJp: "三日待つ。", sentenceEn: "Wait for three days." },
            { kanji: "四", meaning: "Four", readings: "On: シ | Kun: よん, よ", sentenceJp: "四季があります。", sentenceEn: "There are four seasons." },
            { kanji: "五", meaning: "Five", readings: "On: ゴ | Kun: いつ", sentenceJp: "五時にあう。", sentenceEn: "Meet at 5 o'clock." },
            { kanji: "六", meaning: "Six", readings: "On: ロク | Kun: むっ・つ", sentenceJp: "六匹の猫。", sentenceEn: "Six cats." },
            { kanji: "七", meaning: "Seven", readings: "On: シチ | Kun: なな", sentenceJp: "七時におきる。", sentenceEn: "Wake up at 7 o'clock." },
            { kanji: "八", meaning: "Eight", readings: "On: ハチ | Kun: やっ・つ", sentenceJp: "八百屋に行く。", sentenceEn: "Go to the greengrocer." },
            { kanji: "九", meaning: "Nine", readings: "On: キュウ, ク | Kun: ここの・つ", sentenceJp: "九月生まれ。", sentenceEn: "Born in September." },
            { kanji: "十", meaning: "Ten", readings: "On: ジュウ | Kun: とお", sentenceJp: "十人います。", sentenceEn: "There are ten people." },
            { kanji: "百", meaning: "Hundred", readings: "On: ヒャク | Kun: もも", sentenceJp: "百円です。", sentenceEn: "It is 100 yen." },
            { kanji: "千", meaning: "Thousand", readings: "On: セン | Kun: ち", sentenceJp: "千円札。", sentenceEn: "A 1000 yen bill." },
            { kanji: "万", meaning: "Ten Thousand", readings: "On: マン, バン | Kun: -", sentenceJp: "一万円。", sentenceEn: "10,000 yen." },
            { kanji: "円", meaning: "Yen / Circle", readings: "On: エン | Kun: まる・い", sentenceJp: "円高になる。", sentenceEn: "The yen appreciates." },
            { kanji: "日", meaning: "Sun / Day", readings: "On: ニチ, ジツ | Kun: ひ, か", sentenceJp: "今日はいい天気です。", sentenceEn: "Today is good weather." },
            { kanji: "月", meaning: "Moon / Month", readings: "On: ゲツ, ガツ | Kun: つき", sentenceJp: "月が綺麗です。", sentenceEn: "The moon is pretty." },
            { kanji: "火", meaning: "Fire", readings: "On: カ | Kun: ひ", sentenceJp: "火をつけてください。", sentenceEn: "Please light the fire." },
            { kanji: "水", meaning: "Water", readings: "On: スイ | Kun: みず", sentenceJp: "水を飲みます。", sentenceEn: "Drink water." },
            { kanji: "木", meaning: "Tree / Wood", readings: "On: モク, ボク | Kun: き", sentenceJp: "大きな木です。", sentenceEn: "It is a big tree." },
            { kanji: "金", meaning: "Gold / Money", readings: "On: キン | Kun: かね", sentenceJp: "お金がない。", sentenceEn: "I have no money." },
            { kanji: "土", meaning: "Soil / Earth", readings: "On: ド, ト | Kun: つち", sentenceJp: "土を掘る。", sentenceEn: "Dig the soil." },
            { kanji: "年", meaning: "Year", readings: "On: ネン | Kun: とし", sentenceJp: "今年は何年ですか？", sentenceEn: "What year is this year?" },
            { kanji: "時", meaning: "Time / Hour", readings: "On: ジ | Kun: とき", sentenceJp: "今何時ですか？", sentenceEn: "What time is it now?" },
            { kanji: "分", meaning: "Minute / Part", readings: "On: フン, ブン | Kun: わ・かる", sentenceJp: "五分待ちます。", sentenceEn: "Wait for five minutes." },
            { kanji: "半", meaning: "Half", readings: "On: ハン | Kun: なか・ば", sentenceJp: "七時半です。", sentenceEn: "It is 7:30." },
            { kanji: "今", meaning: "Now", readings: "On: コン, キン | Kun: いま", sentenceJp: "今行きます。", sentenceEn: "I am going now." },
            { kanji: "先", meaning: "Ahead / Previous", readings: "On: セン | Kun: さき", sentenceJp: "お先にどうぞ。", sentenceEn: "Go ahead please." },
            { kanji: "来", meaning: "To Come", readings: "On: ライ | Kun: く・る", sentenceJp: "明日来てください。", sentenceEn: "Please come tomorrow." },
            { kanji: "行", meaning: "To Go", readings: "On: コウ, ギョウ | Kun: い・く", sentenceJp: "学校に行きます。", sentenceEn: "I go to school." },
            { kanji: "見", meaning: "To See", readings: "On: ケン | Kun: み・る", sentenceJp: "テレビを見る。", sentenceEn: "Watch TV." },
            { kanji: "聞", meaning: "To Hear / Listen", readings: "On: ブン, モン | Kun: き・く", sentenceJp: "音楽を聞く。", sentenceEn: "Listen to music." },
            { kanji: "食", meaning: "To Eat", readings: "On: ショク | Kun: た・べる", sentenceJp: "ご飯を食べる。", sentenceEn: "Eat a meal." },
            { kanji: "飲", meaning: "To Drink", readings: "On: イン | Kun: の・む", sentenceJp: "お茶を飲む。", sentenceEn: "Drink tea." },
            { kanji: "買", meaning: "To Buy", readings: "On: バイ | Kun: か・う", sentenceJp: "本を買います。", sentenceEn: "Buy a book." },
            { kanji: "書", meaning: "To Write", readings: "On: ショ | Kun: か・く", sentenceJp: "手紙を書く。", sentenceEn: "Write a letter." },
            { kanji: "読", meaning: "To Read", readings: "On: ドク | Kun: よ・む", sentenceJp: "本を読む。", sentenceEn: "Read a book." },
            { kanji: "話", meaning: "To Talk / Story", readings: "On: ワ | Kun: はな・す", sentenceJp: "友達と話す。", sentenceEn: "Talk with a friend." },
            { kanji: "出", meaning: "To Exit / Leave", readings: "On: シュツ | Kun: で・る, だ・す", sentenceJp: "家を出る。", sentenceEn: "Leave the house." },
            { kanji: "入", meaning: "To Enter", readings: "On: ニュウ | Kun: はい・る, い・れる", sentenceJp: "部屋に入る。", sentenceEn: "Enter the room." },
            { kanji: "休", meaning: "To Rest", readings: "On: キュウ | Kun: やす・む", sentenceJp: "会社を休む。", sentenceEn: "Take time off work." },
            { kanji: "立", meaning: "To Stand", readings: "On: リツ | Kun: た・つ", sentenceJp: "ここに立つ。", sentenceEn: "Stand here." },
            { kanji: "生", meaning: "Life / Birth", readings: "On: セイ, ジョウ | Kun: い・きる, う・まれ", sentenceJp: "先生に聞く。", sentenceEn: "Ask the teacher." },
            { kanji: "学", meaning: "Study / Learn", readings: "On: ガク | Kun: まな・ぶ", sentenceJp: "学生です。", sentenceEn: "I am a student." },
            { kanji: "校", meaning: "School", readings: "On: コウ | Kun: -", sentenceJp: "学校に行きます。", sentenceEn: "I go to school." },
            { kanji: "人", meaning: "Person", readings: "On: ジン, ニン | Kun: ひと", sentenceJp: "あの人は誰ですか？", sentenceEn: "Who is that person?" },
            { kanji: "男", meaning: "Man / Male", readings: "On: ダン, ナン | Kun: おとこ", sentenceJp: "男の人です。", sentenceEn: "It is a man." },
            { kanji: "女", meaning: "Woman / Female", readings: "On: ジョ | Kun: おんな", sentenceJp: "女の人です。", sentenceEn: "It is a woman." },
            { kanji: "子", meaning: "Child", readings: "On: シ | Kun: こ", sentenceJp: "子供が遊ぶ。", sentenceEn: "Children play." },
            { kanji: "父", meaning: "Father", readings: "On: フ | Kun: ちち", sentenceJp: "私の父です。", sentenceEn: "This is my father." },
            { kanji: "母", meaning: "Mother", readings: "On: ボ | Kun: はは", sentenceJp: "私の母です。", sentenceEn: "This is my mother." },
            { kanji: "友", meaning: "Friend", readings: "On: ユウ | Kun: とも", sentenceJp: "友達と会う。", sentenceEn: "Meet with friends." },
            { kanji: "本", meaning: "Book / Origin", readings: "On: ホン | Kun: もと", sentenceJp: "日本語の本。", sentenceEn: "Japanese language book." },
            { kanji: "名", meaning: "Name", readings: "On: メイ | Kun: な", sentenceJp: "お名前は何ですか？", sentenceEn: "What is your name?" },
            { kanji: "語", meaning: "Language / Word", readings: "On: ゴ | Kun: かた・る", sentenceJp: "英語を話す。", sentenceEn: "Speak English." },
            { kanji: "何", meaning: "What", readings: "On: カ | Kun: なに, なん", sentenceJp: "これは何ですか？", sentenceEn: "What is this?" },
            { kanji: "大", meaning: "Big / Large", readings: "On: ダイ, タイ | Kun: おお・きい", sentenceJp: "大きい家。", sentenceEn: "A big house." },
            { kanji: "小", meaning: "Small", readings: "On: ショウ | Kun: ちい・さい", sentenceJp: "小さい猫。", sentenceEn: "A small cat." },
            { kanji: "高", meaning: "High / Expensive", readings: "On: コウ | Kun: たか・い", sentenceJp: "背が高い。", sentenceEn: "Tall height." },
            { kanji: "安", meaning: "Cheap / Safe", readings: "On: アン | Kun: やす・い", sentenceJp: "安くて美味しい。", sentenceEn: "Cheap and delicious." },
            { kanji: "新", meaning: "New", readings: "On: シン | Kun: あたら・しい", sentenceJp: "新しい車。", sentenceEn: "A new car." },
            { kanji: "古", meaning: "Old", readings: "On: コ | Kun: ふる・い", sentenceJp: "古い本。", sentenceEn: "An old book." },
            { kanji: "長", meaning: "Long / Leader", readings: "On: チョウ | Kun: なが・い", sentenceJp: "長い道。", sentenceEn: "A long road." },
            { kanji: "多", meaning: "Many / Much", readings: "On: タ | Kun: おお・い", sentenceJp: "人が多い。", sentenceEn: "There are many people." },
            { kanji: "少", meaning: "Few / Little", readings: "On: ショウ | Kun: すく・ない, すこ・し", sentenceJp: "少し待ってください。", sentenceEn: "Please wait a little." },
            { kanji: "白", meaning: "White", readings: "On: ハク | Kun: しろ・い", sentenceJp: "白いシャツ。", sentenceEn: "A white shirt." },
            { kanji: "赤", meaning: "Red", readings: "On: セキ | Kun: あか・い", sentenceJp: "赤いりんご。", sentenceEn: "A red apple." },
            { kanji: "青", meaning: "Blue", readings: "On: セイ | Kun: あお・い", sentenceJp: "青い空。", sentenceEn: "Blue sky." },
            { kanji: "黒", meaning: "Black", readings: "On: コク | Kun: くろ・い", sentenceJp: "黒い犬。", sentenceEn: "A black dog." },
            { kanji: "上", meaning: "Up / Above", readings: "On: ジョウ | Kun: うえ", sentenceJp: "机の上。", sentenceEn: "On top of the desk." },
            { kanji: "下", meaning: "Down / Below", readings: "On: カ, ゲ | Kun: した", sentenceJp: "椅子の下。", sentenceEn: "Under the chair." },
            { kanji: "中", meaning: "Inside / Middle", readings: "On: チュウ | Kun: なか", sentenceJp: "箱の中。", sentenceEn: "Inside the box." },
            { kanji: "外", meaning: "Outside", readings: "On: ガイ | Kun: そと", sentenceJp: "外で遊ぶ。", sentenceEn: "Play outside." },
            { kanji: "右", meaning: "Right", readings: "On: ウ, ユウ | Kun: みぎ", sentenceJp: "右に曲がる。", sentenceEn: "Turn right." },
            { kanji: "左", meaning: "Left", readings: "On: サ | Kun: ひだり", sentenceJp: "左の手。", sentenceEn: "Left hand." },
            { kanji: "前", meaning: "Front / Before", readings: "On: ゼン | Kun: まえ", sentenceJp: "駅の前。", sentenceEn: "In front of the station." },
            { kanji: "後", meaning: "Behind / After", readings: "On: ゴ, コウ | Kun: うしろ, あと", sentenceJp: "後ろを見る。", sentenceEn: "Look behind." },
            { kanji: "東", meaning: "East", readings: "On: トウ | Kun: ひがし", sentenceJp: "東京。", sentenceEn: "Tokyo." },
            { kanji: "西", meaning: "West", readings: "On: セイ, サイ | Kun: にし", sentenceJp: "西の空。", sentenceEn: "Western sky." },
            { kanji: "南", meaning: "South", readings: "On: ナン | Kun: みなみ", sentenceJp: "南の島。", sentenceEn: "Southern island." },
            { kanji: "北", meaning: "North", readings: "On: ホク | Kun: きた", sentenceJp: "北風。", sentenceEn: "North wind." },
            { kanji: "山", meaning: "Mountain", readings: "On: サン | Kun: やま", sentenceJp: "高い山。", sentenceEn: "A high mountain." },
            { kanji: "川", meaning: "River", readings: "On: セン | Kun: かわ", sentenceJp: "綺麗な川。", sentenceEn: "A clean river." },
            { kanji: "天", meaning: "Heaven / Sky", readings: "On: テン | Kun: あめ", sentenceJp: "天気予報。", sentenceEn: "Weather forecast." },
            { kanji: "気", meaning: "Spirit / Air", readings: "On: キ | Kun: -", sentenceJp: "元気ですか？", sentenceEn: "How are you?" },
            { kanji: "雨", meaning: "Rain", readings: "On: ウ | Kun: あめ", sentenceJp: "雨が降る。", sentenceEn: "Rain falls." },
            { kanji: "車", meaning: "Car / Vehicle", readings: "On: シャ | Kun: くるま", sentenceJp: "車に乗る。", sentenceEn: "Ride in a car." },
            { kanji: "電", meaning: "Electricity", readings: "On: デン | Kun: -", sentenceJp: "電車で行く。", sentenceEn: "Go by train." },
            { kanji: "馬", meaning: "Horse", readings: "On: バ | Kun: うま", sentenceJp: "馬に乗る。", sentenceEn: "Ride a horse." },
            { kanji: "駅", meaning: "Station", readings: "On: エキ | Kun: -", sentenceJp: "駅で会う。", sentenceEn: "Meet at the station." },
            { kanji: "国", meaning: "Country", readings: "On: コク | Kun: くに", sentenceJp: "外国に行く。", sentenceEn: "Go to a foreign country." },
            { kanji: "社", meaning: "Company / Shrine", readings: "On: シャ | Kun: やしろ", sentenceJp: "会社員です。", sentenceEn: "I am a company employee." },
            { kanji: "校", meaning: "School", readings: "On: コウ | Kun: -", sentenceJp: "高校生。", sentenceEn: "High school student." },
            { kanji: "店", meaning: "Store / Shop", readings: "On: テン | Kun: みせ", sentenceJp: "店に入る。", sentenceEn: "Enter the shop." },
            { kanji: "銀", meaning: "Silver", readings: "On: ギン | Kun: -", sentenceJp: "銀行に行く。", sentenceEn: "Go to the bank." },
            { kanji: "病", meaning: "Sick / Illness", readings: "On: ビョウ | Kun: やまい", sentenceJp: "病院に行く。", sentenceEn: "Go to the hospital." },
            { kanji: "院", meaning: "Institution", readings: "On: イン | Kun: -", sentenceJp: "大学院。", sentenceEn: "Graduate school." },
            { kanji: "花", meaning: "Flower", readings: "On: カ | Kun: はな", sentenceJp: "赤い花。", sentenceEn: "A red flower." },
            { kanji: "魚", meaning: "Fish", readings: "On: ギョ | Kun: さかな", sentenceJp: "魚を食べる。", sentenceEn: "Eat fish." },
            { kanji: "肉", meaning: "Meat", readings: "On: ニク | Kun: -", sentenceJp: "牛肉を買う。", sentenceEn: "Buy beef." },
            { kanji: "手", meaning: "Hand", readings: "On: シュ | Kun: て", sentenceJp: "手洗う。", sentenceEn: "Wash hands." }
        ];

        let currentKanjiIdx = 0;

        function updateKanjiCard() {
            const data = kanjiData[currentKanjiIdx];
            document.getElementById('cardKanji').textContent = data.kanji;
            document.getElementById('cardMeaning').textContent = data.meaning;
            document.getElementById('cardReadings').textContent = data.readings;
            document.getElementById('cardSentenceJp').textContent = data.sentenceJp;
            document.getElementById('cardSentenceEn').textContent = data.sentenceEn;
            document.getElementById('kanjiProgress').textContent = `${currentKanjiIdx + 1} / ${kanjiData.length}`;
            document.getElementById('kanjiCard').classList.remove('flipped');
        }

        function nextKanji() {
            currentKanjiIdx = (currentKanjiIdx + 1) % kanjiData.length;
            updateKanjiCard();
        }

        function prevKanji() {
            currentKanjiIdx = (currentKanjiIdx - 1 + kanjiData.length) % kanjiData.length;
            updateKanjiCard();
        }

        function speakCurrentKanji() {
            speakText(kanjiData[currentKanjiIdx].kanji);
        }

        // 2. 200 PURE HIRAGANA VOCABULARY DATASET (NO Kanji)
        const vocabData = [
            { kana: "がっこう", romaji: "gakkou", meaning: "School" },
            { kana: "せんせい", romaji: "sensei", meaning: "Teacher" },
            { kana: "にほんご", romaji: "nihongo", meaning: "Japanese language" },
            { kana: "ともだち", romaji: "tomodachi", meaning: "Friend" },
            { kana: "べんきょう", romaji: "benkyou", meaning: "Study" },
            { kana: "おはよう", romaji: "ohayou", meaning: "Good morning" },
            { kana: "ありがとう", romaji: "arigatou", meaning: "Thank you" },
            { kana: "さようなら", romaji: "sayounara", meaning: "Goodbye" },
            { kana: "たべもの", romaji: "tabemono", meaning: "Food" },
            { kana: "のみもの", romaji: "nomimono", meaning: "Drink" },
            { kana: "いぬ", romaji: "inu", meaning: "Dog" },
            { kana: "ねこ", romaji: "neko", meaning: "Cat" },
            { kana: "とり", romaji: "tori", meaning: "Bird" },
            { kana: "さかな", romaji: "sakana", meaning: "Fish" },
            { kana: "ほん", romaji: "hon", meaning: "Book" },
            { kana: "つくえ", romaji: "tsukue", meaning: "Desk" },
            { kana: "いす", romaji: "isu", meaning: "Chair" },
            { kana: "くるま", romaji: "kuruma", meaning: "Car" },
            { kana: "でんしゃ", romaji: "densha", meaning: "Train" },
            { kana: "えき", romaji: "eki", meaning: "Station" },
            { kana: "いえ", romaji: "ie", meaning: "House" },
            { kana: "へや", romaji: "heya", meaning: "Room" },
            { kana: "みず", romaji: "mizu", meaning: "Water" },
            { kana: "おちゃ", romaji: "ocha", meaning: "Tea" },
            { kana: "ごはん", romaji: "gohan", meaning: "Meal / Rice" },
            { kana: "あさ", romaji: "asa", meaning: "Morning" },
            { kana: "ひる", romaji: "hiru", meaning: "Noon / Daytime" },
            { kana: "よる", romaji: "yoru", meaning: "Night" },
            { kana: "きょう", romaji: "kyou", meaning: "Today" },
            { kana: "あした", romaji: "ashita", meaning: "Tomorrow" },
            { kana: "きのう", romaji: "kinou", meaning: "Yesterday" },
            { kana: "いま", romaji: "ima", meaning: "Now" },
            { kana: "じかん", romaji: "jikan", meaning: "Time" },
            { kana: "ひと", romaji: "hito", meaning: "Person" },
            { kana: "おとこ", romaji: "otoko", meaning: "Man" },
            { kana: "おんな", romaji: "onna", meaning: "Woman" },
            { kana: "こども", romaji: "kodomo", meaning: "Child" },
            { kana: "おとうさん", romaji: "otousan", meaning: "Father" },
            { kana: "おかあさん", romaji: "okaasan", meaning: "Mother" },
            { kana: "おにいさん", romaji: "oniisan", meaning: "Older brother" },
            { kana: "おねえさん", romaji: "oneesan", meaning: "Older sister" },
            { kana: "おとうと", romaji: "otouto", meaning: "Younger brother" },
            { kana: "いもうと", romaji: "imouto", meaning: "Younger sister" },
            { kana: "あたま", romaji: "atama", meaning: "Head" },
            { kana: "め", romaji: "me", meaning: "Eye" },
            { kana: "みみ", romaji: "mimi", meaning: "Ear" },
            { kana: "くち", romaji: "kuchi", meaning: "Mouth" },
            { kana: "て", romaji: "te", meaning: "Hand" },
            { kana: "あし", romaji: "ashi", meaning: "Leg / Foot" },
            { kana: "おなか", romaji: "onaka", meaning: "Stomach" },
            { kana: "おおきい", romaji: "ookii", meaning: "Big" },
            { kana: "ちいさい", romaji: "chiisai", meaning: "Small" },
            { kana: "たかい", romaji: "takai", meaning: "High / Expensive" },
            { kana: "やすい", romaji: "yasui", meaning: "Cheap" },
            { kana: "あたらしい", romaji: "atarashii", meaning: "New" },
            { kana: "ふるい", romaji: "furui", meaning: "Old" },
            { kana: "いい", romaji: "ii", meaning: "Good" },
            { kana: "わるい", romaji: "warui", meaning: "Bad" },
            { kana: "あつい", romaji: "atsui", meaning: "Hot" },
            { kana: "さむい", romaji: "samui", meaning: "Cold (Weather)" },
            { kana: "つめたい", romaji: "tsumetai", meaning: "Cold (Touch)" },
            { kana: "むずかしい", romaji: "muzukashii", meaning: "Difficult" },
            { kana: "やさしい", romaji: "yasashii", meaning: "Easy / Kind" },
            { kana: "たのしい", romaji: "tanoshii", meaning: "Fun" },
            { kana: "おもしろい", romaji: "omoshiroi", meaning: "Interesting" },
            { kana: "おいしい", romaji: "oishii", meaning: "Delicious" },
            { kana: "いそがしい", romaji: "isogashii", meaning: "Busy" },
            { kana: "しろい", romaji: "shiroi", meaning: "White" },
            { kana: "くろい", romaji: "kuroi", meaning: "Black" },
            { kana: "あかい", romaji: "akai", meaning: "Red" },
            { kana: "あおい", romaji: "aoi", meaning: "Blue" },
            { kana: "きいろい", romaji: "kiiroi", meaning: "Yellow" },
            { kana: "すき", romaji: "suki", meaning: "Like" },
            { kana: "きらい", romaji: "kirai", meaning: "Dislike" },
            { kana: "じょうず", romaji: "jouzu", meaning: "Skillful" },
            { kana: "へた", romaji: "heta", meaning: "Unskillful" },
            { kana: "げんき", romaji: "genki", meaning: "Healthy / Fine" },
            { kana: "ひま", romaji: "hima", meaning: "Free time" },
            { kana: "たべる", romaji: "taberu", meaning: "To eat" },
            { kana: "のむ", romaji: "nomu", meaning: "To drink" },
            { kana: "みる", romaji: "miru", meaning: "To see" },
            { kana: "きく", romaji: "kiku", meaning: "To listen" },
            { kana: "よむ", romaji: "yomu", meaning: "To read" },
            { kana: "かく", romaji: "kaku", meaning: "To write" },
            { kana: "かう", romaji: "kau", meaning: "To buy" },
            { kana: "いく", romaji: "iku", meaning: "To go" },
            { kana: "くる", romaji: "kuru", meaning: "To come" },
            { kana: "かえる", romaji: "kaeru", meaning: "To return home" },
            { kana: "はなす", romaji: "hanasu", meaning: "To speak" },
            { kana: "ねる", romaji: "neru", meaning: "To sleep" },
            { kana: "おきる", romaji: "okiru", meaning: "To wake up" },
            { kana: "あう", romaji: "au", meaning: "To meet" },
            { kana: "まつ", romaji: "matsu", meaning: "To wait" },
            { kana: "あそぶ", romaji: "asobu", meaning: "To play" },
            { kana: "およぐ", romaji: "oyogu", meaning: "To swim" },
            { kana: "うたう", romaji: "utau", meaning: "To sing" },
            { kana: "つくる", romaji: "tsukuru", meaning: "To make" },
            { kana: "つかう", romaji: "tsukau", meaning: "To use" },
            { kana: "とる", romaji: "toru", meaning: "To take" },
            { kana: "あける", romaji: "akeru", meaning: "To open" },
            { kana: "しめる", romaji: "shimeru", meaning: "To close" },
            { kana: "わすれる", romaji: "wasureru", meaning: "To forget" },
            { kana: "しる", romaji: "shiru", meaning: "To know" },
            { kana: "すわる", romaji: "suwaru", meaning: "To sit" },
            { kana: "たつ", romaji: "tatsu", meaning: "To stand" },
            { kana: "あるく", romaji: "aruku", meaning: "To walk" },
            { kana: "はしる", romaji: "hashiru", meaning: "To run" },
            { kana: "なにも", romaji: "nanimo", meaning: "Nothing" },
            { kana: "どこか", romaji: "dokoka", meaning: "Somewhere" },
            { kana: "だれか", romaji: "dareka", meaning: "Someone" },
            { kana: "いつ", romaji: "itsu", meaning: "When" },
            { kana: "なぜ", romaji: "naze", meaning: "Why" },
            { kana: "どうして", romaji: "doushite", meaning: "Why / How come" },
            { kana: "どれ", romaji: "dore", meaning: "Which one" },
            { kana: "ここ", romaji: "koko", meaning: "Here" },
            { kana: "そこ", romaji: "soko", meaning: "There" },
            { kana: "あそこ", romaji: "asoko", meaning: "Over there" },
            { kana: "どこ", romaji: "doko", meaning: "Where" },
            { kana: "うえ", romaji: "ue", meaning: "Above / On" },
            { kana: "した", romaji: "shita", meaning: "Below / Under" },
            { kana: "なか", romaji: "naka", meaning: "Inside" },
            { kana: "そと", romaji: "soto", meaning: "Outside" },
            { kana: "まえ", romaji: "mae", meaning: "Front" },
            { kana: "うしろ", romaji: "ushiro", meaning: "Back / Behind" },
            { kana: "みぎ", romaji: "migi", meaning: "Right" },
            { kana: "ひだり", romaji: "hidari", meaning: "Left" },
            { kana: "となり", romaji: "tonari", meaning: "Next to" },
            { kana: "あいだ", romaji: "aida", meaning: "Between" },
            { kana: "はる", romaji: "haru", meaning: "Spring" },
            { kana: "なつ", romaji: "natsu", meaning: "Summer" },
            { kana: "あき", romaji: "aki", meaning: "Autumn" },
            { kana: "ふゆ", romaji: "fuyu", meaning: "Winter" },
            { kana: "てんき", romaji: "tenki", meaning: "Weather" },
            { kana: "あめ", romaji: "ame", meaning: "Rain" },
            { kana: "ゆき", romaji: "yuki", meaning: "Snow" },
            { kana: "かぜ", romaji: "kaze", meaning: "Wind" },
            { kana: "そら", romaji: "sora", meaning: "Sky" },
            { kana: "うみ", romaji: "umi", meaning: "Sea / Ocean" },
            { kana: "やま", romaji: "yama", meaning: "Mountain" },
            { kana: "かわ", romaji: "kawa", meaning: "River" },
            { kana: "き", romaji: "ki", meaning: "Tree" },
            { kana: "はな", romaji: "hana", meaning: "Flower" },
            { kana: "くにつ", romaji: "kuni", meaning: "Country" },
            { kana: "まち", romaji: "machi", meaning: "Town / City" },
            { kana: "みせ", romaji: "mise", meaning: "Shop / Store" },
            { kana: "びょういん", romaji: "byouin", meaning: "Hospital" },
            { kana: "ぎんこう", romaji: "ginkou", meaning: "Bank" },
            { kana: "ゆうびんきょく", romaji: "yuubinkyoku", meaning: "Post office" },
            { kana: "としょかん", romaji: "toshokan", meaning: "Library" },
            { kana: "えいがかん", romaji: "eigakan", meaning: "Movie theater" },
            { kana: "こうえん", romaji: "kouen", meaning: "Park" },
            { kana: "ぷーる", romaji: "puuru", meaning: "Pool" },
            { kana: "えあぽーと", romaji: "eapooto", meaning: "Airport" },
            { kana: "きっぷ", romaji: "kippu", meaning: "Ticket" },
            { kana: "かばん", romaji: "kaban", meaning: "Bag" },
            { kana: "さいふ", romaji: "saifu", meaning: "Wallet" },
            { kana: "かさ", romaji: "kasa", meaning: "Umbrella" },
            { kana: "くつ", romaji: "kutsu", meaning: "Shoes" },
            { kana: "ふく", romaji: "fuku", meaning: "Clothes" },
            { kana: "とけい", romaji: "tokei", meaning: "Clock / Watch" },
            { kana: "めがね", romaji: "megane", meaning: "Glasses" },
            { kana: "しゃしん", romaji: "shashin", meaning: "Photograph" },
            { kana: "てがみ", romaji: "tegami", meaning: "Letter" },
            { kana: "えんぴつ", romaji: "enpitsu", meaning: "Pencil" },
            { kana: "かみ", romaji: "kami", meaning: "Paper" },
            { kana: "はさみ", romaji: "hasami", meaning: "Scissors" },
            { kana: "おかね", romaji: "okane", meaning: "Money" },
            { kana: "えいが", romaji: "eiga", meaning: "Movie" },
            { kana: "おんがく", romaji: "ongaku", meaning: "Music" },
            { kana: "すぽーつ", romaji: "supootsu", meaning: "Sports" },
            { kana: "りょこう", romaji: "ryokou", meaning: "Travel" },
            { kana: "かいもの", romaji: "kaimono", meaning: "Shopping" },
            { kana: "さんぽ", romaji: "sanpo", meaning: "Walk / Stroll" },
            { kana: "おふろ", romaji: "ofuro", meaning: "Bath" },
            { kana: "せっけん", romaji: "sekken", meaning: "Soap" },
            { kana: "たおる", romaji: "taoru", meaning: "Towel" },
            { kana: "べっど", romaji: "beddo", meaning: "Bed" },
            { kana: "どあ", romaji: "doa", meaning: "Door" },
            { kana: "まど", romaji: "mado", meaning: "Window" },
            { kana: "えあこん", romaji: "eakon", meaning: "Air conditioner" },
            { kana: "てれび", romaji: "terebi", meaning: "Television" },
            { kana: "らじお", romaji: "rajio", meaning: "Radio" },
            { kana: "かめら", romaji: "kamera", meaning: "Camera" },
            { kana: "ぱそこん", romaji: "pasokon", meaning: "Computer" },
            { kana: "けいたい", romaji: "keitai", meaning: "Mobile phone" },
            { kana: "でんわ", romaji: "denwa", meaning: "Telephone" },
            { kana: "でんき", romaji: "denki", meaning: "Electricity / Light" },
            { kana: "かぎ", romaji: "kagi", meaning: "Key" },
            { kana: "はこ", romaji: "hako", meaning: "Box" },
            { kana: "ふとう", romaji: "futou", meaning: "Envelope" },
            { kana: "きって", romaji: "kitte", meaning: "Stamp" },
            { kana: "荷物", romaji: "nimotsu", meaning: "Luggage" },
            { kana: "おかし", romaji: "okashi", meaning: "Sweets / Snacks" },
            { kana: "くだもの", romaji: "kudamono", meaning: "Fruit" },
            { kana: "やさい", romaji: "yasai", meaning: "Vegetables" },
            { kana: "にく", romaji: "niku", meaning: "Meat" },
            { kana: "たまご", romaji: "tamago", meaning: "Egg" },
            { kana: "ぱん", romaji: "pan", meaning: "Bread" },
            { kana: "ばたー", romaji: "bataa", meaning: "Butter" },
            { kana: "ぎゅうにゅう", romaji: "gyuunyuu", meaning: "Milk" },
            { kana: "さとう", romaji: "satou", meaning: "Sugar" },
            { kana: "しお", romaji: "shio", meaning: "Salt" },
            { kana: "しょうゆ", romaji: "shouyu", meaning: "Soy sauce" }
        ];

        function renderVocab(items) {
            const container = document.getElementById('vocabContainer');
            container.innerHTML = '';
            items.forEach(item => {
                const row = document.createElement('div');
                row.className = 'vocab-row';
                row.innerHTML = `
                    <span class="hiragana-single-line">${item.kana}</span>
                    <span class="romaji-text">${item.romaji}</span>
                    <span class="meaning-text">${item.meaning}</span>
                    <button class="listen-btn" onclick="speakText('${item.kana}')">🔊 Audio</button>
                `;
                container.appendChild(row);
            });
            document.getElementById('vocabCount').textContent = `${items.length} Entries`;
        }

        function filterVocab() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const filtered = vocabData.filter(item => 
                item.kana.includes(query) || 
                item.romaji.toLowerCase().includes(query) || 
                item.meaning.toLowerCase().includes(query)
            );
            renderVocab(filtered);
        }

        // Text-to-Speech Helper
        function speakText(text) {
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'ja-JP';
                window.speechSynthesis.speak(utterance);
            }
        }

        // Initialize Data
        updateKanjiCard();
        renderVocab(vocabData);
