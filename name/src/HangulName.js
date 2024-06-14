import React, { useState } from 'react';
import Hangul from 'hangul-js';
import './App.css';

const getHanja1Style = (parts) => {
  const redNumbers = [2, 4, 14, 20, 36, 40, 42, 43, 44, 76];
  const yellowNumbers = [10, 12, 19, 22, 28, 30, 34, 46, 49, 50, 53, 54, 55, 56, 59, 60, 62, 64, 66, 72, 73, 78, 79, 80];

  if (redNumbers.includes(parts)) {
    return { color: 'white', backgroundColor: 'red' };
  } else if (yellowNumbers.includes(parts)) {
    return { color: 'white', backgroundColor: 'orange' };
  }

  return {};
};

function HangulName() {
  const [inputText, setInputText] = useState('');
  const [userInputArray, setUserInputArray] = useState([]);
  const [wordArray, setWordArray] = useState([]);
  // const [totalName, setTotalName] = useState(0);
  const [nameArray, setNameArray] = useState([]);
  const [hanja1Array, setHanja1Array] = useState([]);
  // const [minusArray, setMinusArray] = useState([]);
  const [hanja2Array, setHanja2Array] = useState([]);

  const hangulStrokeNum = {
    1: ['ㄱ', 'ㄴ', 'ㅡ', 'ㅣ'],
    2: ['ㄷ', 'ㅅ', 'ㅇ', 'ㅋ', 'ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅢ'],
    3: ['ㄹ', 'ㅁ', 'ㅈ', 'ㅌ', 'ㅑ', 'ㅕ', 'ㅛ', 'ㅠ', 'ㅐ', 'ㅔ', 'ㅚ'],
    4: ['ㅂ', 'ㅊ', 'ㅍ', 'ㅎ', 'ㅖ', 'ㅒ', 'ㅝ', 'ㅘ']
  };

  const calculateParts = (jamo) => {
    for (const key in hangulStrokeNum) {
      if (hangulStrokeNum[key].includes(jamo)) {
        return parseInt(key);
      }
    }
    return 0;
  };

  const calEightParts = (parts) => {
    const partsArray = Array.isArray(parts) ? parts : [parts];
    
    const totalStrokes = partsArray.reduce((acc, val) => acc + val, 0);
    const maxEight = Math.floor(totalStrokes / 8) * 8;
  
    return totalStrokes % 8 === 0 ? 8 : totalStrokes - maxEight;
  };
  
  const calSixParts = (parts) => {
    const partsArray = Array.isArray(parts) ? parts : [parts];
    
    const totalStrokes = partsArray.reduce((acc, val) => acc + val, 0);
    const maxSix = Math.floor(totalStrokes / 6) * 6;
  
    return totalStrokes % 6 === 0 ? 6 : totalStrokes - maxSix;
  };

  const hanja1Print = (parts) => {
    const hanja1List = {
      1: '출발권위', 2: '분리파괴', 3: '지도적 인물', 4: '재사불성',
      5: '부귀봉록', 6: '계승발전', 7: '맹호출림', 8: '수복겸전',
      9: '다재다능', 10: '만사허망', 11: '중인신망', 12: '박약박복',
      13: '총명지모', 14: '이산파멸', 15: '군계일학', 16: '덕망유복',
      17: '명망사해', 18: '부귀영달', 19: '고독비참', 20: '백사실패',
      21: '두령운', 22: '중도좌절', 23: '일흥충천', 24: '부귀영화',
      25: '지모순조', 26: '영웅', 27: '대인격', 28: '파란풍파',
      29: '권력재물', 30: '길흉상반', 31: '자수성가', 32: '의외득재',
      33: '권위충천', 34: '재하연속', 35: '온유화순', 36: '영걸시비',
      37: '권위인덕', 38: '문예기예', 39: '위세강중', 40: '변화공허',
      41: '선견고명', 42: '파란자초', 43: '패가망신', 44: '백전백패',
      45: '통달사해', 46: '곤궁신고', 47: '일확천금', 48: '배후조정',
      49: '선가은퇴', 50: '공허실의', 51: '대기만성', 52: '비룡승천',
      53: '외화내빈', 54: '절망불구', 55: '극성극쇠', 56: '변전무상',
      57: '노력성취', 58: '대기만성', 59: '의지박약', 60: '봉록자실',
      61: '부귀영화', 62: '일생신고', 63: '순성지운', 64: '고행쇠퇴',
      65: '행복유덕', 66: '쇠망지운', 67: '형통지운', 68: '흥왕지운',
      69: '재난지운', 70: '적망공허', 71: '발전지운', 72: '상반지운',
      73: '행복길상', 74: '불우파탄', 75: '평화지운', 76: '선곤후길',
      77: '발전지상', 78: '무력후퇴', 79: '궁극불신', 80: '구사일생',
      81: '획환원격'
    };

    const totalStrokes = parts.reduce((acc, val) => acc + val, 0);
    const style = getHanja1Style(totalStrokes);

    return (
      <span style={style}>
        {hanja1List[totalStrokes]}
      </span>
    );
  };

  const hanja2Print = (hanja2_1, parts) => {
    let hanja2Array;
  
    if (hanja2_1 === 1) {
      hanja2Array = {
        1: { value: '건위천', style: { color: 'white', backgroundColor: 'red' } }, 2: { value: '천택리', style: { color: 'black' } },
        3: { value: '천화동인', style: { color: 'black' } }, 4: { value: '천뢰무망', style: { color: 'black' } },
        5: { value: '천풍구', style: { color: 'black' } }, 6: { value: '천수송', style: { color: 'white', backgroundColor: 'red' } },
        7: { value: '천산둔', style: { color: 'white', backgroundColor: 'orange' } }, 8: { value: '천지비', style: { color: 'white', backgroundColor: 'orange' } }
      };
    } else if (hanja2_1 === 2) {
      hanja2Array = {
        1: { value: '택천쾌', style: { color: 'black' } }, 2: { value: '태위택', style: { color: 'black' } },
        3: { value: '택화혁', style: { color: 'white', backgroundColor: 'orange' } }, 4: { value: '택뢰수', style: { color: 'black' } },
        5: { value: '택풍대괴', style: { color: 'black' } }, 6: { value: '택수곤', style: { color: 'white', backgroundColor: 'red' } },
        7: { value: '택산함', style: { color: 'black' } }, 8: { value: '택지췌', style: { color: 'black' } }
      };
    } else if (hanja2_1 === 3) {
      hanja2Array = {
        1: { value: '화천대유', style: { color: 'black' } }, 2: { value: '화택규', style: { color: 'white', backgroundColor: 'red' } },
        3: { value: '이위화', style: { color: 'black' } }, 4: { value: '화뢰서합', style: { color: 'black' } },
        5: { value: '화풍정', style: { color: 'white', backgroundColor: 'red' } }, 6: { value: '화수미제', style: { color: 'black' } },
        7: { value: '화산려', style: { color: 'black' } }, 8: { value: '화지진', style: { color: 'black' } }
      };
    } else if (hanja2_1 === 4) {
      hanja2Array = {
        1: { value: '뇌천대장', style: { color: 'black' } }, 2: { value: '뇌택귀매', style: { color: 'black' } },
        3: { value: '뇌화풍', style: { color: 'black' } }, 4: { value: '진위뢰', style: { color: 'black' } },
        5: { value: '뇌풍항', style: { color: 'black' } }, 6: { value: '뇌수해', style: { color: 'black' } },
        7: { value: '뇌산소과', style: { color: 'white', backgroundColor: 'orange' } }, 8: { value: '뇌지예', style: { color: 'black' } }
      };
    } else if (hanja2_1 === 5) {
      hanja2Array = {
        1: { value: '풍천소축', style: { color: 'white', backgroundColor: 'red' } }, 2: { value: '풍택중부', style: { color: 'black' } },
        3: { value: '풍화가인', style: { color: 'black' } }, 4: { value: '풍뢰익', style: { color: 'white', backgroundColor: 'orange' } },
        5: { value: '손위풍', style: { color: 'black' } }, 6: { value: '풍수환', style: { color: 'white', backgroundColor: 'red' } },
        7: { value: '풍산점', style: { color: 'black' } }, 8: { value: '풍지관', style: { color: 'black' } }
      };
    } else if (hanja2_1 === 6) {
      hanja2Array = {
        1: { value: '수천수', style: { color: 'black' } }, 2: { value: '수택절', style: { color: 'black' } },
        3: { value: '수화기제', style: { color: 'white', backgroundColor: 'red' } }, 4: { value: '수뢰둔', style: { color: 'white', backgroundColor: 'orange' } },
        5: { value: '수풍정', style: { color: 'black' } }, 6: { value: '감위수', style: { color: 'white', backgroundColor: 'red' } },
        7: { value: '수산건', style: { color: 'white', backgroundColor: 'orange' } }, 8: { value: '수지비', style: { color: 'black' } }
      };
    } else if (hanja2_1 === 7) {
      hanja2Array = {
        1: { value: '산천대축', style: { color: 'black' } }, 2: { value: '산택손', style: { color: 'white', backgroundColor: 'orange' } },
        3: { value: '산화비', style: { color: 'black' } }, 4: { value: '산뢰이', style: { color: 'black' } },
        5: { value: '산풍고', style: { color: 'white', backgroundColor: 'red' } }, 6: { value: '산수몽', style: { color: 'white', backgroundColor: 'red' } },
        7: { value: '간위산', style: { color: 'white', backgroundColor: 'orange' } }, 8: { value: '산지박', style: { color: 'white', backgroundColor: 'red' } }
      };
    } else if (hanja2_1 === 8) {
      hanja2Array = {
        1: { value: '지천태', style: { color: 'black' } }, 2: { value: '지택림', style: { color: 'black' } },
        3: { value: '지화명이', style: { color: 'black' } }, 4: { value: '지뢰복', style: { color: 'black' } },
        5: { value: '지풍승', style: { color: 'black' } }, 6: { value: '지수사', style: { color: 'black' } },
        7: { value: '지산겸', style: { color: 'black' } }, 8: { value: '곤위지', style: { color: 'black' } }
      };
    }
  
    if (hanja2Array) {
      if (parts > 0 && parts <= Object.keys(hanja2Array).length) {
        const { value, style } = hanja2Array[parts];
        return (
          <span style={style}>
            {value}
          </span>
        );
      } else {
        return "부적절한 parts 값입니다. 범위를 확인하세요.";
      }
    } else {
      return "부적절한 hanja2_1 값입니다. 조건을 확인하세요.";
    }
  };

  // 한글 분리시켜 획 더하는 계산
  const calculate1 = () => {
    const words = inputText.trim();
    // let total = 0;
    const result = [];

    for (let i = 0; i < words.length; i++) {
      const char = words.charAt(i);
      if (char.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)) {
        const jamoArray = Hangul.disassemble(char);
        const parts = jamoArray.map((jamo) => calculateParts(jamo));
        // total += parts.reduce((acc, val) => acc + val, 0);
        result.push({ char, jamoArray, parts });
      } else {
        result.push({ char, jamoArray: [], parts: [0] });
      }
    }

    setWordArray(result);
    // setTotalName(total);

    const nameParts1 = [...result[0].parts, ...result[1].parts]; // 홍길
    const nameParts2 = [...result[1].parts, ...result[2].parts]; // 길동
    const nameParts3 = [...result[0].parts, ...result[2].parts]; // 홍동
    const nameParts4 = [...result[0].parts, ...result[1].parts, ...result[2].parts]; // 홍길동

    setNameArray([nameParts2, nameParts1, nameParts3, nameParts4]);

    const hanja1_1 = hanja1Print(nameParts1);
    const hanja1_2 = hanja1Print(nameParts2);
    const hanja1_3 = hanja1Print(nameParts3);
    const hanja1_4 = hanja1Print(nameParts4);

    setHanja1Array([hanja1_2, hanja1_1, hanja1_3, hanja1_4]);

    // const minusArrayCopy = [
    //   calEightParts(nameParts1),
    //   calEightParts(nameParts2),
    //   calEightParts(nameParts3),
    //   calSixParts(nameParts4),
    // ].map(parts => Array.isArray(parts) ? parts : [parts]);
    
    // setMinusArray(minusArrayCopy);

    const hanja2_1 = calEightParts(nameParts1);
    // console.log("hanja2_1:", hanja2_1);
    const hanja2_2 = hanja2Print(hanja2_1, calEightParts(nameParts2));
    const hanja2_3 = hanja2Print(hanja2_1, calEightParts(nameParts3));
    const hanja2_4 = hanja2Print(hanja2_1, calSixParts(nameParts4));

    setHanja2Array([hanja2_2, hanja2_3, hanja2_4]);
  };

  // 획수 직접 입력해서 더하는 계산
  const calculate2 = (resultParts1, resultParts2, resultParts3) => {
    const nameParts1 = [resultParts1, resultParts2];
    const nameParts2 = [resultParts2, resultParts3];
    const nameParts3 = [resultParts1, resultParts3];
    const nameParts4 = [resultParts1, resultParts2, resultParts3];

    setNameArray([nameParts2, nameParts1, nameParts3, nameParts4]);

    const hanja1_1 = hanja1Print(nameParts1);
    const hanja1_2 = hanja1Print(nameParts2);
    const hanja1_3 = hanja1Print(nameParts3);
    const hanja1_4 = hanja1Print(nameParts4);

    setHanja1Array([hanja1_2, hanja1_1, hanja1_3, hanja1_4]);

    const hanja2_1 = calEightParts(nameParts1);
    const hanja2_2 = hanja2Print(hanja2_1, calEightParts(nameParts2));
    const hanja2_3 = hanja2Print(hanja2_1, calEightParts(nameParts3));
    const hanja2_4 = hanja2Print(hanja2_1, calSixParts(nameParts4));

    setHanja2Array([hanja2_2, hanja2_3, hanja2_4]);
  };

  return (
    <div className="app-container">
      <h2>이름 분석</h2>
      <input type="text" value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') { calculate1(); }}} />
      <button onClick={calculate1}>확인</button>
      <h2>획수 입력</h2>
      <input type="text" placeholder="쉼표(,)로 구분하여 입력" value={userInputArray.join(',')}
        onChange={(e) => setUserInputArray(e.target.value.split(',').map((val) => val.trim()))}
        onKeyDown={(e) => { if (e.key === 'Enter') { calculate2(...userInputArray.map(Number)); }}} />
      <button onClick={() => calculate2(...userInputArray.map(Number))}>확인</button>
      <div className="table-container">
        <div className="table-row">
          {nameArray.map((nameParts, index) => (
            <div key={index} className="table-cell">
              {nameParts.reduce((acc, val) => acc + val, 0)}
            </div>
          ))}
        </div>
        <div className="table-row">
          {hanja1Array.map((hanja1_, index) => (
            <div key={index} className="table-cell"> {hanja1_} </div> ))}
        </div>
        <div className="table-row">
          {hanja2Array.map((hanja2_, index) => (
            <div key={index} className="table-cell"> {hanja2_} </div> ))}
        </div>
      </div>
    </div>
  );
}

export default HangulName;
