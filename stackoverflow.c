#include <stdio.h>


int func(int counter){
    int result =5;
         printf("func %p  %p  %p \n",&result,&counter, __builtin_frame_address(0));
         
         func(counter+1);
         
         return 0;
}


int main() {
    
     int i;
     
     printf("main %p  %p \n",&i, __builtin_frame_address(0));
     
     func(4);
     
    return 0;
}