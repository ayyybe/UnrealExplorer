#include <iostream>
#include <Windows.h>
#include <inttypes.h>

// This is a companion to TestApp, which is primarily used for quick testing during development.
// This C++ program makes it easier to manually test reflection using TestApp
// Actual structured tests are located in UnrealExplorer.Tests.

struct test_struct1
{
    int FirstAsdf;
    int QwertyTwo;
    bool yeet_skeet;
    bool nu;
    float FloatyBoi;
    double DoubleTrouble;
    int64_t LongBoi;
    int64_t LongBoiTwo;
    uint64_t NoU;
};

struct test_struct2
{
    int FirstInt;
    int16_t SecondInt16;
    int* ThirdIntPtr;
    uint8_t* FourthBytePtr;
};

struct test_struct3 : public test_struct2
{
    uint64_t NotFirstUltraLongBoi;
    test_struct1* PitterPatter;
    int Digits[10];
};

#define PRINT_PTR_CODE(VAR) printf("var " #VAR " = (IntPtr)0x%p;\n", &VAR)
#define PRINT_OFFSET(STRUCT, VAR) printf(#STRUCT "." #VAR ": %*ld (0x%lX)\n", 20 - (int)sizeof(#VAR), offsetof(STRUCT, VAR), offsetof(STRUCT, VAR))
#define PRINT_SIZE(VAR) printf("sizeof(" #VAR ") = %ld (0x%lX)\n", sizeof(VAR), sizeof(VAR))

int main()
{
    test_struct1 ts1_zero { 0 };
    test_struct1 ts1_values1 { 123, -69, true, false, 420420.69f, 696969.420420, INT64_MAX, INT64_MIN, UINT64_MAX};

    test_struct2 ts2_zero { 0 };
    int ts2_values1_3int = 987654321;
    test_struct2 ts2_values1 { 6996222, -12345, &ts2_values1_3int, nullptr };

    test_struct3 ts3_zero{ { 0 }, 0 };
    int ts3_values1_super_3int = 7777777;
    test_struct3 ts3_values1{ { 11111111, 2, &ts3_values1_super_3int, nullptr}, 123, &ts1_values1, {0, 111, 2, 333, 4, 555, 6, 777, 8, 999} };

    printf("const int pid = %u;\n\n", GetCurrentProcessId());

    PRINT_PTR_CODE(ts1_zero);
    PRINT_PTR_CODE(ts1_values1);

    std::cout << "\n";

    PRINT_PTR_CODE(ts2_zero);
    PRINT_PTR_CODE(ts2_values1);

    std::cout << "\n";

    PRINT_PTR_CODE(ts3_zero);
    PRINT_PTR_CODE(ts3_values1);

    std::cout << "\n--------------------------\n\n";
    
    PRINT_SIZE(test_struct1);
    PRINT_OFFSET(test_struct1, FirstAsdf);
    PRINT_OFFSET(test_struct1, QwertyTwo);
    PRINT_OFFSET(test_struct1, yeet_skeet);
    PRINT_OFFSET(test_struct1, nu);
    PRINT_OFFSET(test_struct1, FloatyBoi);
    PRINT_OFFSET(test_struct1, DoubleTrouble);
    PRINT_OFFSET(test_struct1, LongBoi);
    PRINT_OFFSET(test_struct1, LongBoiTwo);
    PRINT_OFFSET(test_struct1, NoU);

    std::cout << "\n";

    PRINT_SIZE(test_struct2);
    PRINT_OFFSET(test_struct2, FirstInt);
    PRINT_OFFSET(test_struct2, SecondInt16);
    PRINT_OFFSET(test_struct2, ThirdIntPtr);
    PRINT_OFFSET(test_struct2, FourthBytePtr);

    std::cout << "\n";

    PRINT_SIZE(test_struct3);
    PRINT_OFFSET(test_struct3, NotFirstUltraLongBoi);
    PRINT_OFFSET(test_struct3, PitterPatter);
    PRINT_OFFSET(test_struct3, Digits);

    system("pause > NUL");
}