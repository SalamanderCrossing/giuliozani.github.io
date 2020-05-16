import matplotlib.pyplot as plt
import json
from scipy import stats

data = json.load(open('data_chrome.json'))
print(stats.pearsonr(data["walkerXs"], data["eyeXs"]));
print(stats.pearsonr(data["walkerYs"], data["eyeYs"]));

plt.figure()
plt.subplot(411)
#plt.plot(t1, , 'bo', t2, f(t2), 'k')
plt.plot(data["walkerYs"])

plt.subplot(412)
#plt.plot(t2, np.cos(2*np.pi*t2), 'r--')
plt.plot(data["eyeYs"])

plt.subplot(413)
plt.plot(data["walkerXs"])

plt.subplot(414)
plt.plot(data["eyeXs"])

plt.show()
