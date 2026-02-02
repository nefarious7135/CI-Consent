
# Playwright Test Coverage

## บุคคลธรรมดา - ไทย
| Test Case                        | Status |
|----------------------------------|:------:|
| E2E C2C Generic                  |   ✅   |
| E2E C2C Generic add person       |   ✅   |
| E2E C2C BT                       |   ✅   |
| E2E C2C BT add person            |   ✅   |
| E2E CRL Generic                  |   ✅   |
| E2E CRL Generic add person       |   ❌   |
| E2E CRL BT                       |   ✅   |
| E2E CRL BT add person            |   ❌   |

## บุคคลธรรมดา - ต่างชาติ
| Test Case                        | Status |
|----------------------------------|:------:|
| E2E C2C Generic                  |   ✅   |
| E2E C2C Generic add person       |   ❌   |
| E2E C2C BT                       |   ✅   |
| E2E C2C BT add person            |   ❌   |
| E2E CRL Generic                  |   ✅   |
| E2E CRL Generic add person       |   ❌   |
| E2E CRL BT                       |   ✅   |
| E2E CRL BT add person            |   ❌   |

## นิติบุคคล
| Test Case                        | Status |
|----------------------------------|:------:|
| E2E C2C Generic                  |   ✅   |
| E2E C2C Generic add person       |   ❌   |
| E2E C2C BT                       |   ✅   |
| E2E C2C BT add person            |   ❌   |

---

### Additional Features
- Return station
- Reject station
- Edit station
- Validate error prescreen (policy)
- Verify text

---

### Run Tests
```bash
    await Feature.Mockdata('ไทย', 'c2c', 'generic', 'add_person');
    await Feature.Mockdata('ไทย', 'c2c', 'bt', 'no_add_person');
    await Feature.Mockdata('ไทย', 'c2c', 'bt', 'add_person');
    await Feature.Mockdata('ไทย', 'crl', 'generic', 'no_add_person');
    await Feature.Mockdata('ไทย', 'crl', 'generic', 'add_person');
    await Feature.Mockdata('ไทย', 'crl', 'bt', 'no_add_person');
    await Feature.Mockdata('ไทย', 'crl', 'bt', 'add_person');

    await Feature.Mockdata('ต่างชาติ', 'c2c', 'generic', 'no_add_person');
    await Feature.Mockdata('ต่างชาติ', 'c2c', 'generic', 'add_person');
    await Feature.Mockdata('ต่างชาติ', 'c2c', 'bt', 'no_add_person');
    await Feature.Mockdata('ต่างชาติ', 'c2c', 'bt', 'add_person');
    await Feature.Mockdata('ต่างชาติ', 'crl', 'generic', 'no_add_person');
    await Feature.Mockdata('ต่างชาติ', 'crl', 'generic', 'add_person');
    await Feature.Mockdata('ต่างชาติ', 'crl', 'bt', 'no_add_person');
    await Feature.Mockdata('ต่างชาติ', 'crl', 'bt', 'add_person');

    await Feature.Mockdata('นิติ', 'c2c', 'generic', 'no_add_person');
    await Feature.Mockdata('นิติ', 'c2c', 'generic', 'add_person');
    await Feature.Mockdata('นิติ', 'c2c', 'bt', 'no_add_person');
    await Feature.Mockdata('นิติ', 'c2c', 'bt', 'add_person');
```
