## Linear Regression Plugin for Grafana
![스크린샷 2020-07-21 04 42 43](https://user-images.githubusercontent.com/24896007/87979347-e299d580-cb0c-11ea-9240-8f4e2323321e.png)

This panel draw forcaset result of selected target data by linear regression.

# Main Issues
1. @types/d3  doesn't support enough type to use d3's library on Grafana
1. so I change some type as any type 
  > where :  @type/d3 -> d3-array -> index.d.ts <br>
  > how   :  insert 'any type' in max interface <br>
1. In the end, adove one is not able to pass CircleCI pipline test
1. So I changed my code as any type to pass it
1. CircleCI reinstalls all dependencies and test your code with strong prettier and lint rules
1. I recommend you to check your code in CircleCI when you do pull request to grafana plugin repository.

# Development

Using Docker:

1. Clone the repository and `cd` to it
1. make sure you have [yarn]( https://yarnpkg.com/) installed
1. install project dependencies: `yarn install --pure-lockfile`
1. Start the "watch" task: `yarn watch`
1. Run a local Grafana instance with the development version of the plugin: `docker run -p 3000:3000 -d --name grafana-plugin-dev --volume $(pwd)/dist:/var/lib/grafana/plugins/clock-panel grafana/grafana`
1. Check the logs to see that Grafana has started up: `docker logs -f grafana-plugin-dev`
1. Open Grafana at http://localhost:3000/
1. Log in with username "admin" and password "admin"
1. Create new dashboard and add the plugin

To build a production build with minification: `yarn build`


### check grafana plugin tutorial  
https://grafana.com/tutorials/build-a-panel-plugin-with-d3/#8


# Screenshots
![스크린샷 2020-07-21 04 42 52](https://user-images.githubusercontent.com/24896007/87979358-e62d5c80-cb0c-11ea-857a-a3a7c32eebe7.png)
![스크린샷 2020-07-21 04 43 17](https://user-images.githubusercontent.com/24896007/87979370-e9284d00-cb0c-11ea-92b9-89018eeeb739.png)


![스크린샷 2020-05-25 23 54 50](https://user-images.githubusercontent.com/24896007/82824298-0ca39280-9ee4-11ea-99fa-c6f15bec8d63.png)
![스크린샷 2020-05-25 23 54 50](https://user-images.githubusercontent.com/24896007/82824298-0ca39280-9ee4-11ea-99fa-c6f15bec8d63.png)
![스크린샷 2020-05-25 23 55 02](https://user-images.githubusercontent.com/24896007/82824305-10cfb000-9ee4-11ea-8f04-990c86409dd8.png)
![스크린샷 2020-05-25 23 55 19](https://user-images.githubusercontent.com/24896007/82824311-13320a00-9ee4-11ea-9297-d555c672bfd5.png)
![스크린샷 2020-05-25 23 56 23](https://user-images.githubusercontent.com/24896007/82824319-15946400-9ee4-11ea-8158-b6c8a8b969c4.png)
![스크린샷 2020-05-25 23 56 36](https://user-images.githubusercontent.com/24896007/82824325-17f6be00-9ee4-11ea-8221-188ead44b226.png)




## pull request 시 참고사항
1. CircleCI pipline 을 통해서 코딩 규칙 테스트 완료후 진행
1. pull request 는 github.com 온라인 페이지에서 진행
1. bellow is a image for how to do pull request to Grafana plugin
![스크린샷 2020-07-22 05 45 01](https://user-images.githubusercontent.com/24896007/88105603-23621f00-cbdf-11ea-9719-2b136cfa358e.png)


### individual part
d3-array -> index.d.ts 관련부분

export function max<T>(array: ArrayLike<T>, accessor: (datum: T, index: number, array: ArrayLike<T>) => any | string | undefined | null): any | string | undefined;
export function min<T>(array: ArrayLike<T>, accessor: (datum: T, index: number, array: ArrayLike<T>) => any | string | undefined | null): any | string | undefined;

package.json 부분

"dependencies": {
    "@types/d3": "^5.7.2",
    "@types/d3-array": "file:MyModule/d3-array"
},
"resolutions": {
    "@types/d3-array": "1.2.7"
}