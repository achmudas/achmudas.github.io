### Static mocks and nasty things in tests

* Test 1

```
import org.mockito.MockedStatic;

@ExtendWith(MockitoExtension.class)
public class SomeTest
...
private static MockedStatic<IOUtils> ioUtils = Mockito.mockStatic(IOUtils.class);
```

* Test 2
```
public class SomeAnotherTest {
    ByteArrayOuputStream out = new ByteArrayOutputStream();
    out.write(1);
}
```
Exception is thrown this.buff is null... 

#### What's happening

For tests the same thread is used and MockedStatic keep's the scope for whole test run so ... TBA - provide some thread dumps and objects as evidence?

#### Fix

* Test 1

```
import org.mockito.MockedStatic;

@ExtendWith(MockitoExtension.class)
public class SomeTest
...
private static MockedStatic<IOUtils> ioUtils = Mockito.mockStatic(IOUtils.class);

...
@AfterAll
public static void afterTests() {
    ioUtils.close();
}
```