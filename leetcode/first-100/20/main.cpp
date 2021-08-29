#include <map>
#include <stack>
#include <string>
#include <iostream>
using namespace std;

//  Time complexity: O(n)
//  Space complexity: O(n)

bool isValid(string brackets) {
  if (brackets.size() % 2 != 0) return false;

  stack<char> stack;
  map<char, char> pairs = {
    {'(', ')'},
    {'[', ']'},
    {'{', '}'}
  };

  for (char x : brackets) {
    if (x == '(' || x == '[' || x == '{') {
      stack.push(x);
    } else {  
      if (!stack.empty() && pairs[stack.top()] == x) stack.pop();
      else return false;
    }
  }

  return stack.empty();
}

int main() {
  cout << isValid("()") << endl; //  true
  
  return 0;
}