function firstRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))) {
        return str.charAt(i)
      }
    }
    return 'no results found'
  }

  console.log(firstRepeatingCharacter("ABCC"))
  console.log(firstRepeatingCharacter("DCABAD"))
  console.log(firstRepeatingCharacter("EBC"))
  console.log(firstRepeatingCharacter("F"))