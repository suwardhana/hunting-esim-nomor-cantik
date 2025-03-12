const axios = require('axios');

function generateAestheticNumbers() {
  const patterns = {
    trailingZeros: () => {
      const nums = [];
      // 1-digit prefix + 5 zeros (100000, 200000, etc.)
      for (let i = 1; i <= 9; i++) nums.push(i.toString().padEnd(6, '0'));
      // 2-digit prefix + 4 zeros (120000, 340000, etc.)
      for (let i = 10; i <= 99; i++) nums.push(i.toString().padEnd(6, '0'));
      // 3-digit prefix + 3 zeros (123000, 456000, etc.)
      for (let i = 100; i <= 999; i++) nums.push(i.toString().padEnd(6, '0'));
      return nums;
    },
    trailingZerosFour: () => {
      const nums = [];

      // 1-digit prefix + 4 zeros (e.g., 10000, 20000, ..., 90000)
      for (let i = 1; i <= 9; i++) {
        nums.push(i.toString().padEnd(5, '0')); // 1-digit + 4 zeros
      }

      // 2-digit prefix + 4 zeros (e.g., 100000, 110000, ..., 990000)
      for (let i = 10; i <= 99; i++) {
        nums.push(i.toString().padEnd(6, '0')); // 2-digits + 4 zeros
      }

      return nums;
    },
    repeatingPairs: () => {
      const nums = [];
      for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
          for (let c = 0; c <= 9; c++) {
            nums.push(`${a}${a}${b}${b}${c}${c}`);
          }
        }
      }
      return nums;
    },
    sequential: () => {
      const nums = [];
      // Ascending sequences (012345, 123456, etc.)
      for (let start = 0; start <= 4; start++) {
        nums.push([...Array(6)].map((_, i) => (start + i) % 10).join(''));
      }
      // Descending sequences (987654, 876543, etc.)
      for (let start = 9; start >= 5; start--) {
        nums.push([...Array(6)].map((_, i) => (start - i + 10) % 10).join(''));
      }
      return nums;
    },
    palindrome: () => {
      const nums = [];
      for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
          for (let c = 0; c <= 9; c++) {
            nums.push(`${a}${b}${c}${c}${b}${a}`);
          }
        }
      }
      return nums;
    },
    sameDigits: () => {
      return Array.from({ length: 10 }, (_, i) => String(i).repeat(6));
    },
    repeatingTriplets: () => {
      const nums = [];
      for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
          nums.push(`${a}${a}${a}${b}${b}${b}`);
        }
      }
      return nums;
    },
    alternatingPairs: () => {
      const nums = [];
      for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
          nums.push(`${a}${b}`.repeat(3)); // ABABAB
        }
      }
      return nums;
    },
    mirrorNumbers: () => {
      const nums = [];
      for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
          for (let c = 0; c <= 9; c++) {
            nums.push(`${a}${b}${c}${c}${b}${a}`);
          }
        }
      }
      return nums;
    },
    geometricSequence: () => {
      const nums = [];
      for (let start = 0; start <= 9; start++) {
        for (let step = 1; step <= 4; step++) {
          const digits = [];
          for (let i = 0; i < 6; i++) {
            digits.push((start + i * step) % 10);
          }
          nums.push(digits.join(''));
        }
      }
      return nums;
    },
    checkerboard: () => {
      const nums = [];
      for (let high = 5; high <= 9; high++) {
        for (let low = 0; low <= 4; low++) {
          nums.push(`${high}${low}${high}${low}${high}${low}`);
          nums.push(`${low}${high}${low}${high}${low}${high}`);
        }
      }
      return nums;
    },
    centralSymmetry: () => {
      const nums = [];
      for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
          for (let c = 0; c <= 9; c++) {
            nums.push(`${a}${b}${c}${c}${b}${a}`);
          }
        }
      }
      return nums;
    },
    aaaabb: () => {
      const numbers = [];
      // Loop through possible values for A (1-9 to avoid leading zeros)
      for (let a = 0; a <= 9; a++) {
        // Loop through possible values for B (0-9)
        for (let b = 0; b <= 9; b++) {
          // Create the AAAABB pattern
          const number = `${a}${a}${a}${a}${b}${b}`;
          numbers.push(number);
        }
      }
      return numbers;
    },
    aabbbb: () => {
      const numbers = [];
      // Loop through possible values for A (0-9)
      for (let a = 0; a <= 9; a++) {
        // Loop through possible values for B (0-9)
        for (let b = 0; b <= 9; b++) {
          // Create the AABBBB pattern
          const number = `${a}${a}${b}${b}${b}${b}`;
          numbers.push(number);
        }
      }
      return numbers;
    },
    aaaaab: () => {
      const numbers = [];
      // Loop through possible values for A (0-9)
      for (let a = 0; a <= 9; a++) {
        // Loop through possible values for B (0-9)
        for (let b = 0; b <= 9; b++) {
          // Create the AAAAAB pattern
          const number = `${a}${a}${a}${a}${a}${b}`;
          numbers.push(number);
        }
      }
      return numbers;
    },
    abbbbb: () => {
      const numbers = [];
      // Loop through possible values for A (0-9)
      for (let a = 0; a <= 9; a++) {
        // Loop through possible values for B (0-9)
        for (let b = 0; b <= 9; b++) {
          // Create the ABBBBB pattern
          const number = `${a}${b}${b}${b}${b}${b}`;
          numbers.push(number);
        }
      }
      return numbers;
    },
    abacad: () => {
      const numbers = [];
      // Loop through possible values for A (0-9)
      for (let a = 0; a <= 9; a++) {
        // Loop through possible starting values for B (0-7, since B+2 must be <= 9)
        for (let b = 0; b <= 7; b++) {
          const c = b + 1; // Increment by 1
          const d = b + 2; // Increment by 2
          // Create the abacad pattern
          const number = `${a}${b}${a}${c}${a}${d}`;
          numbers.push(number);
        }
      }
      return numbers;
    },
    aabaab: () => {
      const numbers = [];
      // Loop through possible values for A (0-9)
      for (let a = 0; a <= 9; a++) {
        // Loop through possible values for B (0-9)
        for (let b = 0; b <= 9; b++) {
          // Create the AABAAB pattern
          const number = `${a}${a}${b}${a}${a}${b}`;
          numbers.push(number);
        }
      }
      return numbers;
    },
    abbabb: () => {
      const numbers = [];
      // Loop through possible values for A (0-9)
      for (let a = 0; a <= 9; a++) {
        // Loop through possible values for B (0-9)
        for (let b = 0; b <= 9; b++) {
          // Create the ABBABB pattern
          const number = `${a}${b}${b}${a}${b}${b}`;
          numbers.push(number);
        }
      }
      return numbers;
    },
    aabbcc: () => {
      const numbers = [];
      // Loop through possible values for A (0-9)
      for (let a = 0; a <= 9; a++) {
        // Loop through possible values for B (0-9)
        for (let b = 0; b <= 9; b++) {
          // Loop through possible values for C (0-9)
          for (let c = 0; c <= 9; c++) {
            // Create the AABBCC pattern
            const number = `${a}${a}${b}${b}${c}${c}`;
            numbers.push(number);
          }
        }
      }
      return numbers;
    }
  };

  // Generate all possible numbers
  const allNumbers = [
    // ...patterns.trailingZeros(),
    // ...patterns.trailingZerosFour(),
    // ...patterns.repeatingPairs(),
    // ...patterns.sequential(),
    // ...patterns.palindrome(),
    // ...patterns.sameDigits(),
    // ...patterns.repeatingTriplets(),
    // ...patterns.alternatingPairs(),
    // ...patterns.mirrorNumbers(),
    // ...patterns.geometricSequence(),
    // ...patterns.checkerboard(),
    ...patterns.centralSymmetry(),
    // ...patterns.aaaabb(),
    // ...patterns.aabbbb(),
    // ...patterns.aaaaab(),
    // ...patterns.abbbbb(),
    // ...patterns.abacad(),
    // ...patterns.aabaab(),
    // ...patterns.abbabb(),
    // ...patterns.aabbcc(),
  ];

  // Deduplicate and filter out 000000
  const uniqueNumbers = [...new Set(allNumbers)].filter(n => n !== '000000');

  // Shuffle and select 50
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return shuffle(uniqueNumbers).slice(0, 300);
  // return shuffle(uniqueNumbers);
}
// API checking function
async function checkNumbers() {
  const numbers = generateAestheticNumbers();
  const validNumbers = [];
  console.debug(numbers);

  // Create an array of promises for concurrent requests
  const promises = numbers.map(async (number) => {
    const data = `phonenumber=${number}&type=esim`;

    try {
      const response = await axios({
        method: 'post',
        url: 'https://perdana.tri.co.id/sim/phonenumber/getlist?',
        headers: {
          'Accept': '*/*',
          'Accept-Language': 'en-US,en;q=0.9,id-ID;q=0.8,id;q=0.7',
          'Connection': 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'DNT': '1',
          'Origin': 'https://perdana.tri.co.id',
          'Referer': 'https://perdana.tri.co.id/beliperdana',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'Cookie': ''
        },
        data: data,
        timeout: 5000
      });
      // console.debug(response);
      var tempValid = [];
      if (response.data.success == "true") {
        // repeat response.data.msisdn array
        response.data.msisdn.forEach((msisdn) => {
          tempValid.push(msisdn.MSISDN);
        });
      }
      return tempValid;
      // return response.data.success == "true" ? number : null;
    } catch (error) {
      return null; // Mark as invalid if request fails
    }
  });

  // Process all responses
  const results = await Promise.all(promises);
  // filter result if not empty array
  return results.filter(number => number !== null && number.length > 0)
}

function processAndSortNumbers(nestedArray) {
  // Step 1: Flatten the nested array into a single-dimensional array
  const flattenedArray = nestedArray.flat();

  // Step 2: Sort the array by the length of each number (shortest first)
  const sortedArray = flattenedArray.sort((a, b) => a.length - b.length);

  return sortedArray;
}
// Run the check and output results
checkNumbers()
  .then(validNumbers => {
    console.log('Valid numbers:', processAndSortNumbers(validNumbers));

    console.log('Total valid:', processAndSortNumbers(validNumbers).length);
  })
  .catch(error => {
    console.error('Error:', error);
  });