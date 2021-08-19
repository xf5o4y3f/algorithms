#include <iostream>
#include <vector>
#include <map>
using namespace std;

//  Time complexity: O(n)
//  Space complexity: O(n)

int singleNumber(vector<int>& nums) {
  map<int, int> freqTable;

  for (int i = 0; i < nums.size(); i++) 
    freqTable[nums[i]] += 1;

  for (auto x : freqTable)
    if (x.second == 1) return x.first;

  return -1;
}

int main() {
  vector<int> nums = {2, 2, 1};
  cout << singleNumber(nums) << endl; //  1

  return 0;
}