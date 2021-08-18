const utils = require("./index");
describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { ...input };
    expect(input).toEqual(expected);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    let input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    let actual = utils.trimPropertiesMutation(input);
    expect(input).toEqual(actual);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    let input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    let largest = utils.findLargestInteger(input);
    expect(largest).toBe(3);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    let first = counter.countDown();
    expect(first).toBe(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    let second = counter.countDown();
    expect(second).toBe(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown(); // 3
    counter.countDown(); // 2
    counter.countDown(); // 1
    let third = counter.countDown();
    expect(third).toBe(0);
    let fourth = counter.countDown();
    expect(fourth).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    let calls = 1;
    let season;
    for (let i = 0; i < calls; i++) {
      season = seasons.next();
    }
    expect(season).toBe("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let calls = 2;
    let season;
    for (let i = 0; i < calls; i++) {
      season = seasons.next();
    }
    expect(season).toBe("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let calls = 3;
    let season;
    for (let i = 0; i < calls; i++) {
      season = seasons.next();
    }
    expect(season).toBe("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let calls = 4;
    let season;
    for (let i = 0; i < calls; i++) {
      season = seasons.next();
    }
    expect(season).toBe("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let calls = 5;
    let season;
    for (let i = 0; i < calls; i++) {
      season = seasons.next();
    }
    expect(season).toBe("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let calls = 40;
    let season;
    for (let i = 0; i < calls; i++) {
      season = seasons.next();
    }
    expect(season).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    let distance = 10;
    let odo = focus.drive(distance);
    expect(odo).toBe(distance);
  });
  test("[16] driving the car uses gas", () => {
    let distance = 30;
    let tank = focus.tank;
    focus.drive(distance);
    expect(focus.tank).toBe(tank - distance / focus.mpg);
  });
  test("[17] refueling allows to keep driving", () => {
    let maxRange = focus.tank * focus.mpg;
    focus.drive(maxRange);
    let odo = focus.odometer;
    expect(focus.drive(100)).toBe(odo); //out of gas, odometer does not change
    expect(focus.refuel(100)).toBe(maxRange);
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    let maxRange = focus.tank * focus.mpg;
    let newRange = focus.refuel(1);
    expect(newRange).toBe(maxRange);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    const result = await utils.isEvenNumberAsync(2);
    expect(result).toBe(true);
  });
  test("[20] resolves false if passed an odd number", async () => {
    const result = await utils.isEvenNumberAsync(3);
    expect(result).toBe(false);
  });
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    try {
      utils.isEvenNumberAsync("no number");
    } catch (error) {
      expect(error.message).toBe("number must be a number");
    }
  });
  test('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    try {
      utils.isEvenNumberAsync(NaN);
    } catch (error) {
      expect(error.message).toBe("number must be a number");
    }
  });
});