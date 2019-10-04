import React from 'react'
import { MyComponent } from '.'
import { expectType, expectError } from 'tsd'

// expected interface
expectType<JSX.Element>(
  <MyComponent
    prop1="Hello"
    prop2={123}
  />
)

// This one's fine
expectError(
  <MyComponent
    foo="bar"
  />
)

// This one's also fine
expectError(
  <MyComponent
    prop1={1}
    prop2={2}
  />
)

// This one's also fine
expectError(
  <MyComponent
    prop1="hey"
    prop2={1234}
    iShouldNotBe="here"
  />
)

// This one's broken
expectError(
  <MyComponent
    prop1="hello"
  />
)


// This one too
expectError(
  <MyComponent
    prop2={2}
  />
)
