// data
const poems = {
    "moon": {
        "title": "The Moon",
        "text-en": ["I fell in love with the Moon<br>",
                    "My eyes are a mirror<br>Reflecting a facade<br>Who never knows<br>Lancelot<br>Reflecting an eternal silence<br>", 
                    "My brain is a chisel<br>Sculpting a concept<br>Who never speaks<br>Galatea<br>Sculpting a wordless white<br>",
                    "My heart is a well<br>Filled with a shadow<br>Is it him<br>Or is it me<br>A forever blooming Narcissus<br>",
                    "Only in his dreams<br>Endymion sees the Moon"],
        "text-cn": ["我爱上了月亮<br>",
                    "我的眼睛是银镜<br>映着一个幻象<br>不会知晓<br>兰斯洛<br>映照无垠的荒芜<br>", 
                    "我的大脑是槌凿<br>刻着一项概念<br>不会睁眼<br>伽拉缇<br>刻下无言的苍白<br>",
                    "我的心脏是水井<br>盛着一道影子<br>是他<br>还是我<br>盛开的纳西索<br>",
                    "恩底弥翁只在梦中见到月亮"],
        "imgs": ["moon.png", "sculp.png", "narc.png"],
        "imgs-alt":["a picture of the moon", "a picture of a white marble sculpture", "a picture of a blooming yellow narcissus flower"],
        "excerpt-en": "My eyes are a mirror<br>Reflecting a facade<br>Who never knows<br>Lancelot<br>Reflecting an eternal silence<br>",
        "excerpt-cn": "我的眼睛是银镜<br>映着一个幻象<br>不会知晓<br>兰斯洛<br>映照无垠的荒芜<br>",
    },
    "cloud": {
        "title": "The Clouds",
        "text-en": ["The car is heading away from the clouds<br>Is it sunny again?<br>It should be sunny in California<br>I should escape from the clouds<br>",
                    "The car is passing by a pale moon<br>Sounds of water<br>Sky<br>The tears of the moon should be white<br>Fog<br>Or the hem of your shirt<br>Escape<br>", 
                    "Look, you said<br>at the clouds<br>I looked at you<br>The wind winnowed through the mountains<br>and through your hair<br>dark black clouds",
                    "The car is heading away from the clouds<br>I want to escape from the roses<br>I cannot escape from the clouds<br>"],
        "text-cn": ["车驶离乌云<br>天晴了吗<br>加州的天应是晴朗的<br>我应逃离乌云<br>",
                    "车驶过苍白的月亮<br>只剩下水声<br>天空<br>我想<br>月亮的眼泪大概是乳白色的<br>雾<br>还是你的衣角<br>逃离", 
                    "看<br>你说云<br>我看向你<br>风吹过群山<br>黑色的长发如黑云翻墨<br>",
                    "车驶离乌云<br>我想逃离玫瑰<br>我逃离不了乌云"],
        "imgs": ["cloud.png"],
        "imgs-alt":["a painting of a girl with her head in the clouds"],
        "excerpt-en": "Look, you said<br>at the clouds<br>I looked at you<br>The wind winnowed through the mountains<br>and through your hair<br>dark black clouds",
        "excerpt-cn": "看<br>你说云<br>我看向你<br>风吹过群山<br>黑色的长发如黑云翻墨<br>"
    },
    "spring": {
        "title": "Spring",
        "text-en": ["The footsteps of Spring are close<br>The nights are still as dark as nights<br>The clouds are just as white as clouds<br>The kettle will run out of water<br>The rotten branch will bloom new forms of green<br>", 
                    "The weather is getting warmer<br>I can plant flowers another day<br>I will forget<br>or maybe it was white all along?<br>",
                    "Let us go?<br>Go.<br>We will be away from the clouds<br>We are entering Spring<br>And Spring is of many colors<br>"],
        "text-cn": ["春天已然到来<br>黑夜仍旧是黑夜<br>云也还是云<br>水杯会没有水<br>腐朽的木枝会发出新芽<br>", 
                    "天气在慢慢暖和<br>鲜花也可以明天再栽<br>我会忘记<br>或者那里本来就一片空白？<br>",
                    "走吧？<br>走<br>我们会远离乌云<br>我们在进入春天<br>而春天总是彩色的<br>"],
        "imgs": ["chun.jpg"],
        "imgs-alt":["a painting of a spring scene, with blue sky, white clouds, and pink flowers"],
        "excerpt-en": "The weather is getting warmer<br>I can plant flowers another day<br>I will forget<br>or maybe it was white all along?<br>",
        "excerpt-cn": "天气在慢慢暖和<br>鲜花也可以明天再栽<br>我会忘记<br>或者那里本来就一片空白？<br>",
    },
    "glance": {
        "title": "A Glance",
        "text-en": ["Melted snow rushes between my brows<br>Sunlight sleeps on my lashes<br>", 
                    "But now they all run to you<br>They run to those eyes of yours<br>"],
        "text-cn": ["春水在我的眉毛间奔涌<br>阳光在我的睫毛上筑巢<br>", 
                    "但他们都跑向你<br>跑向你的眼睛<br>"],
        "imgs": ["glance.jpg"],
        "imgs-alt":["a painting of a girl looking ahead in green color palette"],
        "excerpt-en": "But now they all run to you<br>They run to those eyes of yours<br>",
        "excerpt-cn": "但他们都跑向你<br>跑向你的眼睛<br>",
    },    
    "invitation": {
        "title": "An Invitation",
        "text-en": ["Illusions are parasites in green<br>Breeding from those eyes I barely see anymore<br>They cannot grow a heart out of a heart<br>But disguise as the light of Spring<br>Preying on my greed and poetry<br>", 
                    "But poetry and the nights are both cold<br>Dying moths<br>And on the other side<br>I heard a beckoning<br>The flame sent me an invitation to his banquet<br>I will run<br>I will fly<br>I will be his guest of the night<br>"],
        "text-cn": ["幻觉是绿色的寄生虫<br>滋长于那双我记不太清的眼睛<br>它不能使心脏长出心脏<br>却伪装成春光<br>想要撷取我的贪恋与诗行<br>", 
                    "可是诗句和夜晚都是冷冰冰的<br>将死的蛾子<br>而在另一边<br>我听见呼唤<br>烈火在邀我赴宴<br>我奔跑<br>我飞去<br>我会做他今晚的客人<br>"],
        "imgs": ["inv.GIF"],
        "imgs-alt":["a painting of a girl with a glitch in her eye"],
        "excerpt-en": "I will run<br>I will fly<br>I will be his guest of the night<br>",
        "excerpt-cn": "我奔跑<br>我飞去<br>我会做他今晚的客人<br>",
    }    
};




