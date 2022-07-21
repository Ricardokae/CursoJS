function findNeedle(haystack) {
    const findNeedlee =
          [
            'hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'
          ]
     const findNeedle = findNeedlee.indexOf('needle')
     console.log(`found the needle at position ${findNeedle}`)
   }
   findNeedle()