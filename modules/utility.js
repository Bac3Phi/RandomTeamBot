module.exports.compareVersion = (vA, vB) =>
{
    // Return 1 if a > b
    // Return -1 if a < b
    // Return 0 if a == b
    if (vA === vB)
        return 0;

    var a_components = vA.split(".");
    var b_components = vB.split(".");

    var len = Math.min(a_components.length, b_components.length);

    // loop while the components are equal
    for (var i = 0; i < len; i++)
    {
        // A bigger than B
        if (parseInt(a_components[i]) > parseInt(b_components[i]))
            return 1;
        // B bigger than A
        if (parseInt(a_components[i]) < parseInt(b_components[i]))
            return -1;
    }

    // If one's a prefix of the other, the longer one is greater.
    if (a_components.length > b_components.length)
        return 1;
    if (a_components.length < b_components.length)
        return -1;

    // Otherwise they are the same.
    return 0;
}