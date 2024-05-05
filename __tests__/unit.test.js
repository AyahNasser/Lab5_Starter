// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


test('Correct Phone Number', () => {
  expect(isPhoneNumber('415-555-5477')).toBe(true);
});

test('Correct Phone Number', () => {
  expect(isPhoneNumber('415-768-5477')).toBe(true);
});

test('Wrong Phone Number', () => {
  expect(isPhoneNumber('415-555-477')).toBe(false);
});

test('Wrong Phone Number', () => {
  expect(isPhoneNumber('0-5-55477')).toBe(false);
});



test('Correct Email', () => {
  expect(isEmail('analdawsari@ucsd.edu')).toBe(true);
});

test('Correct Email', () => {
  expect(isEmail('ayah201@ucsd.edu')).toBe(true);
});

test('Wrong Email', () => {
  expect(isEmail('analdawsari@@334ucsd.edu')).toBe(false);
});

test('Wrong Email', () => {
  expect(isEmail('analdawsari@  ucsd.edu')).toBe(false);
});




test('Correct Date', () => {
  expect(isDate('06/22/2024')).toBe(true);
});

test('Correct Date', () => {
  expect(isDate('10/22/2024')).toBe(true);
});

test('Wrong Date', () => {
  expect(isDate('123/22/2024')).toBe(false);
});

test('Wrong Date', () => {
  expect(isDate('06/229/2024')).toBe(false);
});



test('Strong Password', () => {
  expect(isStrongPassword('mmMMkjLL9982MM')).toBe(true);
});

test('Strong Password', () => {
  expect(isStrongPassword('LLOKK00')).toBe(true);
});

test('Weak Password', () => {
  expect(isStrongPassword('111111')).toBe(false);
});

test('Weak Password', () => {
  expect(isStrongPassword('123')).toBe(false);
});


test('Correct Color', () => {
  expect(isHexColor('ff5733')).toBe(true);
});

test('Correct Color', () => {
  expect(isHexColor('33a2ff')).toBe(true);
});

test('Wrong Color', () => {
  expect(isHexColor('33a2ffweq')).toBe(false);
});

test('Wrong Color', () => {
  expect(isHexColor('33a2ffmnkkw')).toBe(false);
});



