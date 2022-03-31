
import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('code started');
    this.state = {
      message: '',
      tabValue: 1,
      data: [],
      isLoading: false,
      isDisable: true,
      isSelected: false,
      isCardList: true,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    )
      .then((response) => response.json())

      .then((json) => {
        let tempdata = JSON.parse(JSON.stringify(json));
        //  console.log("tempdata->",tempdata)
        tempdata.forEach((el, i) => {
          // console.log("tempdata",tempdata[i])
          tempdata[i] = { ...tempdata[i], isCheck: false };
        });
        // console.log("tempdata",tempdata)
        this.setState({ data: tempdata, isLoading: false });
      })
      // .then(()=>this.setState({isLoading:false}))
      .catch((error) => {
        //  console.log("error-->",error)
      });
 
    //  .finally(()=>this.setState({isLoading:false}))

    console.log(this.state.data);
  }

  handleEdit = (el) => {
    // console.log('pressed-->1', el);

    this.setState({ isDisable: false });

    // console.log('push--->', this.state.data);
  };
 
  handleInput = (text, el) => {
    
     let deep = JSON.parse(JSON.stringify(this.state.data));
    this.setState({ isDisable: false });
    console.log('input pressed--->2',);
    console.log('text-->1', text);
    console.log('el-->', el);
    deep.forEach((item,i) => {
      if (item.name === el.name) {
        console.log('item.id-->', item.id, text, deep[i]);
         
       deep[i].id=text
      
console.log("indexx--->",deep[i]) 
           
           this.setState({});
           console.log("this.state.data-->",this.state.data) 
      }
      
    });
     this.setState({data:deep})
   
  };

  handleCards = () => {
    console.log('pre---->');
    this.setState({ isDisable: true });
  };

  handleCheckBox = (el) => {
    console.log('el--->c', el);

    this.setState({});
    console.log('plusssssss', this.state.isCheck);
    this.state.data.forEach((item) => {
      if (item.id === el.id) {
        el.isCheck = !el.isCheck;
      }
    });
    // this.state.isCheck=!this.state.isCheck
    // this.state.data.isCheck=!this.state.data.isCheck
    console.log('plusssssss22', this.state.data.isCheck);
    this.setState({});

    console.log('check---->', this.state.isCheck);
  };

  handleSelectedAll = (el) => {
    this.state.isSelected = !this.state.isSelected;
    this.state.data.forEach((item, i) => {
      if (this.state.isSelected === true) {
        item.isCheck = true;
      } else {
        item.isCheck = false;
      }

      this.setState({});
    });
  };

  handleTabs = (val) => {
    console.log('val-->', val, this.state.tabValue);
    this.setState({ tabValue: val });
    this.setState({ nextScreen: val });
    console.log('val-->', val, this.state.tabValue);
  };
  handleEditList = () => {
    this.setState({ isDisable: false });
    console.log(this.state.isDisable);
  };
  handleTextList = (el, text) => {
    console.log('pressed', el, text);

    console.log('isdisable', this.state.isDisable);
    this.state.data.forEach((item) => {
      if (item.name === el.name) {
        item.name = text;
        this.setState({});
      }
    });
  };

  handleCard = () => {
    console.log('card--->');
    this.state.isCardList = true;
    this.setState({});
  };
  handleList = () => {
    console.log('list--->');
    this.state.isCardList = false;
    this.setState({});
    console.log('this.state.cardlist->>', this.state.isCardList);
  };

  render() {
    console.log('data-->1', this.state.data);
    // console.log("isloading",this.state.isLoading)
  
    return (
      <View style={{ flex: 1, padding: 10 }}>
        {this.state.isLoading ? <Text>loading...</Text> : 
<View>
        {this.state.isCardList ? (
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={{
                height: 15,
                width: 15, 
                borderWidth: 1,
                marginLeft: 9,
                backgroundColor: 'blue',
              }}
              onPress={() => this.handleSelectedAll()}>
              {this.state.isSelected ? (
                <Image
                  style={{ height: '100%', width: '100%' }}
                  source={{ 
                    uri: 'https://w7.pngwing.com/pngs/385/139/png-transparent-check-mark-free-content-free-flash-graphics-angle-hand-logo-thumbnail.png',
                  }}
                />
              ) : (
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'white',
                  }}
                  source={{ uri: '' }}
                />
              )}
            </TouchableOpacity>
            <View style={{ marginLeft: '11.5%' }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Coin card
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginRight: 5 }}>
              <TouchableOpacity
                style={{ height: 20, width: 20 }}
                onPress={() => this.handleCard()}>
                <Image
                  style={{ height: 15, width: 15 }}
                  source={{
                    uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQCT8IiSgfv1m1QnHqGby4T6rZ4Q-kt9r0Jgxuh39MA2HXZiWun',
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: 20,
                  width: 20,
                  borderWidth: 0,
                  marginLeft: 15,
                }}
                onPress={() => this.handleList()}>
                <Image
                  style={{ height: 15, width: 15 }}
                  source={{
                    uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8ooqK8ZTmsf6vLaLYEDOI8Ssk6lGvm6aoK_Klc3jFfdlTtdsx',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {this.state.isCardList ? (
          <View>
            {this.state.data.map((el) => {
              return (
                <View
                  style={{
                    height: 160,
                    width: '100%',
                    backgroundColor: 'pink',
                    borderRadius: 5,
                    margin: 5,
                    padding: 5,
                  }}>
                  <View 
                    style={{
                      flex: 2,
                      borderBottomWidth: 3,
                      borderColor: 'yellow',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}></View>
                    <View style={{ flex: 0.2, flexDirection: 'row' }}>
                      <TouchableOpacity
                        style={{ flex: 0.09, marginRight: 4, borderWidth: 1 }}
                        onPress={() => this.handleCheckBox(el)}>
                        {el.isCheck ? (
                          <Image
                            style={{ height: '100%', width: '100%' }}
                            source={{
                              uri: 'https://w7.pngwing.com/pngs/385/139/png-transparent-check-mark-free-content-free-flash-graphics-angle-hand-logo-thumbnail.png',
                            }}
                          />
                        ) : (
                          <Image
                            style={{
                              height: '100%',
                              width: '100%',
                              backgroundColor: 'white',
                            }}
                            source={{ uri: '' }}
                          />
                        )}
                      </TouchableOpacity>

                      <TextInput
                        value={el.id}
                        disabled={this.state.isDisable}
                        style={{ width: 100, marginRight: 10 }}
                        onChangeText={(text) =>
                          this.handleInput(text, el)
                        }></TextInput>

                      <TouchableOpacity
                        style={{
                          height: 15,
                          width: 15,
                        }}
                        onPress={() => this.handleEdit(el)}>
                        <Image
                          style={{ height: '100%', width: '100%' }}
                          source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Bnumqo6ryKPGCJ5TieflBvpYAsPS-3WI_zKSmGMEz3PgCT6k',
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={{ flex: 1.5 }}
                      onPress={() => this.handleCards()}>
                      <View
                        style={{
                          flex: 2,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          borderWidth: 0,
                          margin: 10,
                        }}>
                        <View style={{ flex: 1, borderWidth: 0 }}>
                          <Image
                            style={{
                              height: 75,
                              width: 75,
                            }}
                            source={el.image}
                          />
                        </View>
                        <Text> {el.market_cap_rank}</Text>
                        <Text> {el.symbol}</Text>
                        <Text> {el.current_price}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      borderWidth: 0,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>high 24h-{el.high_24h}</Text>
                    <Text>low 24h-{el.low_24h}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        ) : (
          <CoinList
            data={this.state.data}
            handleEditList={this.handleEditList}
            handleTextList={this.handleTextList}  
            isDisable={this.state.isDisable}
            handleCard={this.handleCard}
            handleList={this.handleList}
          />
        )}
        </View>
        }
      </View>
    ); 
  }
}

export class CoinList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //  console.log("data2-->",this.props.data)
    return (
      <View style={{ flex: 1, backgroundColor: '#CCCCCC' }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#CCCCCC',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{ marginLeft: '40%' }}>
            <Text
              style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
              Coin list
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginRight: 5 }}>
            <TouchableOpacity
              style={{ height: 20, width: 20, borderWidth: 0 }}
              onPress={() => this.props.handleCard()}>
              <Image
                style={{ height: 15, width: 15 }}
                source={{
                  uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQCT8IiSgfv1m1QnHqGby4T6rZ4Q-kt9r0Jgxuh39MA2HXZiWun',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ height: 20, width: 20, borderWidth: 0, marginLeft: 15 }}
              onPress={() => this.props.handleList()}>
              <Image
                style={{ height: 15, width: 15 }}
                source={{
                  uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8ooqK8ZTmsf6vLaLYEDOI8Ssk6lGvm6aoK_Klc3jFfdlTtdsx',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {this.props.data.map((el) => {
          return (
            <View
              style={{
                height: 60,
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                alignItems: 'center',
                borderBottomColor: '#CCCCCC',
              }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderRadius: 20,
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image style={{ height: 40, width: 40 }} source={el.image} />
                </View>
              </View>

              <TextInput
                value={el.name}
                disabled={this.props.isDisable}
                onChangeText={(text) =>
                  this.props.handleTextList(el, text)
                }></TextInput>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  height: 20,
                  width: 40,
                  textAlign: 'center',
                  borderRadius: 2,
                }}
                onPress={() => this.props.handleEditList(el)}> 
                <Image
                  style={{ height: 18, width: 38 }}
                  source={{
                    uri: 'https://www.clipartmax.com/png/middle/266-2668645_two-black-pencils-pencil-png-and-psd-file-for-free-pencil-edit.png',
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
export class NextScreenTwo extends React.Component {
  render() {
    return <View style={{ flex: 1, backgroundColor: 'orange' }}></View>;
  }
}

