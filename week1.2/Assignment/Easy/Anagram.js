function isAnagram(str1, str2)
{
    if(str1 != str2)
        return false;

    let sortedstr1 = str1.split('').sort().join('');
    let sortedstr2 = str2.split('').sort().join('');

    if(str1[i] != str2[i])
        return false;
    return true;
}

module.exports = isAnagram;