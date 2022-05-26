#include <iostream>  
#include <stack>  
using namespace std;  
int main()  
{  
    std::stack<int> newstack;  
    newstack.push(23);  
    newstack.push(46);  

        newstack.push(19);  
            newstack.push(29);  
                newstack.push(3
                9);  
                
    newstack.push(69);  
    cout << newstack.size();  
    return 0;  
}  