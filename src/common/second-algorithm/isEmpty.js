function isEmpty(value) {
  const TYPEOFVALUE = typeof value;
  // 0. value가 빈 문자열인 경우
  if (value === "") {
    return true;
  }
  // 1. value가 null 혹은 undefined인 경우
  if (value === null || value === undefined) {
    return true;
  }
  // 2. 원시 타입의 경우 비어있지 않은 것으로 간주
  if (TYPEOFVALUE !== "object") {
    return false;
  }

  // 3. 배열의 길이가 0이면 비어있는 것으로 간주
  if (Object.keys(value).length === 0) {
    return true;
  } else {
    // 4. object의 value가 모두 0이면 비어있는 것으로 간주
    for (const v of Object.values(value)) {
      if (!isEmpty(v)) {
        return false;
      }
    }
    return true;
  }
}

export default isEmpty;